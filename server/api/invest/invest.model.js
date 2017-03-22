import mongoose from 'mongoose';
import { EventEmitter } from 'events';

const InvestSchemaEvents = new EventEmitter();
let Schema = mongoose.Schema;

let InvestSchema = new Schema({
  investor: { type: String, ref: 'User' },
  post: { type: Schema.Types.ObjectId, ref: 'Post' },
  poster: { type: String, ref: 'User' },
  author: { type: String, ref: 'User' },
  ownPost: { type: Boolean, default: false },
  amount: Number,
  relevantPoints: { type: Number, default: 0 },

  // this info helps us determin how much the
  // investor (or author) has earned from this post
  upvotes: { type: Number, default: 0 },
  downVotes: { type: Number, default: 0 },
  lastInvestor: { type: String, ref: 'User' },
  partialUsers: { type: Number, default: 0 },
  relevance: { type: Number, default: 0 },
  partialRelevance: { type: Number, default: 0 },
}, {
  timestamps: true
});

InvestSchema.index({ post: 1 });
InvestSchema.index({ investor: 1 });
InvestSchema.index({ post: 1, investor: 1, ownPost: 1 });

InvestSchema.statics.events = InvestSchemaEvents;

/**
 * When the amount is not a whole number, we save add up the increments and save the list of users
 * once we reach a whole number we send the update to the user
 */
InvestSchema.statics.updateUserInvestment = async function updateEarnings(
  user, investor, post, relevance, amount) {
  let earnings;
  let fromUser;
  let totalUsers;
  try {
    earnings = await this.findOne({ investor: investor._id, post: post._id });

    if (!earnings) {
      earnings = new this({
        investor: investor._id,
        post: post._id,
        author: post.user,
        relevance: 0,
        partialRelevance: 0,
        partialUsers: 0,
        ownPost: investor._id === post.user
      });
    }

    if (amount > 0) {
      earnings.lastInvestor = user._id;
    } else {
      earnings.lastInvestor = null;
    }

    if (Math.abs(relevance) < 1) {
      earnings.partialRelevance += relevance;
      earnings.partialUsers += 1;
      relevance = 0;

      if (Math.abs(earnings.partialRelevance) >= 1) {
        relevance = Math.round(earnings.partialRelevance);
        earnings.partialRelevance -= relevance;
        earnings.relevance += relevance;
        totalUsers = earnings.partialUsers;
        earnings.partialUsers = 0;
        fromUser = earnings.lastInvestor;
      }
    } else {
      relevance = Math.round(relevance);
      earnings.relevance += relevance;
      totalUsers = 1;
      fromUser = earnings.lastInvestor;
    }

    // updates amount earned by user from post
    earnings = await earnings.save();

    // console.log(earnings.investor, ' ', earnings.partialRelevance, ' ', relevance);

    if (Math.abs(relevance) >= 1) {
      let earningsEvent = {
        _id: user._id,
        type: 'UPDATE_EARNINGS',
        payload: [earnings]
      };
      this.events.emit('investEvent', earningsEvent);
    }
  } catch (err) {
    console.log('update user invest error ', err);
    console.log(earnings);
  }
  return {
    relevance,
    fromUser,
    totalUsers
  };
};


module.exports = mongoose.model('Invest', InvestSchema);
