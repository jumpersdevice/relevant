import mongoose from 'mongoose';
import socketEvent from 'server/socket/socketEvent';

const { Schema } = mongoose;

const TEST_ENV = process.env.NODE_ENV === 'test';

const EarningsSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    source: { type: String, default: 'post' },
    post: { type: Schema.Types.ObjectId, ref: 'Post' },
    // spent is legacy code keep in case we need to recompute legacy tokens
    spent: { type: Number, default: 0 },
    stakedTokens: { type: Number, default: 0 },
    totalPostShares: { type: Number, default: 0 },
    estimatedPostPayout: { type: Number, default: 0 },
    shares: { type: Number, default: 0 },
    earned: { type: Number, default: 0 },
    payoutTime: Date,
    status: String,
    type: { type: String, default: 'coins' },
    community: { type: String },
    communityId: { type: Schema.Types.ObjectId, ref: 'Community' },

    cashOutAttempt: { type: Schema.Types.Boolean, default: false },
    cashOutAmt: { type: Number, default: 0 },

    prevBalance: { type: Number, default: 0 },
    endBalance: { type: Number, default: 0 },

    totalPreviousPaidout: { type: Number, default: 0 },
    legacyAirdrop: { type: Number, default: 0 },
    referralTokens: { type: Number, default: 0 },
    airdropTokens: { type: Number, default: 0 }
  },
  {
    timestamps: true
  }
);

EarningsSchema.index({ post: 1 });
EarningsSchema.index({ status: 1 });
EarningsSchema.index({ user: 1, status: 1 });
EarningsSchema.index({ user: 1, post: 1 });

EarningsSchema.statics.updateRewardsRecord = async function updateRewardsRecord(earning) {
  const updatedEarning = await this.findOneAndUpdate(
    { user: earning.user, post: earning.post, communityId: earning.communityId },
    { $set: { ...earning } },
    { new: true, upsert: true }
  );
  updatedEarning.updateClient({ actionType: 'UPDATE_EARNING' });
  return updatedEarning;
};

EarningsSchema.methods.updateClient = function updateClient({ actionType }) {
  const earningsAction = {
    _id: this.user,
    type: actionType,
    payload: this
  };
  socketEvent.emit('socketEvent', earningsAction);
};

EarningsSchema.pre('remove', async function preRemove(next) {
  this.updateClient({ actionType: 'REMOVE_EARNING' });
  next();
});

EarningsSchema.statics.updateUserBalance = async function updateBalance(earning) {
  earning = new this(earning);
  earning = await earning.save();
  return earning;
};

EarningsSchema.statics.updateEarnings = async function updateEarnings({
  post,
  communityId,
  user
}) {
  const leeway = TEST_ENV ? 1000 * 60 : 0;

  if (!post.data)
    post.data = await this.model('PostData').find({ post: post._id, communityId });

  // Don't update expired post payouts! Especially if they might be pending compute
  if (new Date(post?.data?.payoutTime).getTime() + leeway <= Date.now()) return null;

  await this.model('Earnings').updateMany(
    { post: post._id, communityId },
    {
      $set: {
        estimatedPostPayout: post.data.expectedPayout,
        totalPostShares: post.data.shares
      }
    },
    { multi: true }
  );
  const earning = await this.findOne({ user: user._id, post: post._id, communityId });
  earning?.updateClient({ actionType: 'UPDATE_EARNING' });
  return earning;
};

EarningsSchema.statics.stakedTokens = async function stakedTokens() {
  return this.model('Earnings').aggregate([
    { $match: { status: 'pending' } },
    {
      $group: {
        _id: '$community',
        stakedTokens: { $sum: '$stakedTokens' }
      }
    }
  ]);
};

module.exports = mongoose.model('Earnings', EarningsSchema);
