import mongoose from 'mongoose';
import Tag from '../tag/tag.model';

let Schema = mongoose.Schema;


let RelevanceSchema = new Schema({
  user: { type: String, ref: 'User', index: true },
  tag: { type: String, ref: 'Tag' },
  global: { type: Boolean, default: false },
  topTopic: { type: Boolean, deafault: false },
  community: { type: String },
  category: { type: String, ref: 'Tag' },
  relevance: { type: Number, default: 0 },
  rank: Number,
  totalUsers: Number,
  level: Number,
  percentRank: Number,
  relevanceRecord: [{
    relevance: Number,
    time: Date,
  }],
}, {
  timestamps: true
});

RelevanceSchema.index({ user: 1, relevance: 1 });
RelevanceSchema.index({ user: 1, community: 1 });

  // update user relevance and save record
RelevanceSchema.methods.updateRelevanceRecord = function () {
  let relevanceRecord = this.relevanceRecord;
  if (!relevanceRecord) relevanceRecord = [];
  relevanceRecord.unshift({
    time: new Date(),
    relevance: this.relevance
  });
  relevanceRecord = this.relevanceRecord.slice(0, 10);
  this.relevanceRecord = relevanceRecord;
  return this;
};

RelevanceSchema.statics.updateUserRelevance = async function (user, post, relevanceToAdd) {
  let tagRelevance;
  // TODO await?
  // TODO right now we are updating reputation based on post community
  // but we can also do it based on voter's diff community reputations!
  try {
    let community = post.community;
    let cats = await Tag.find({ category: true });
    let tagsAndCat = [...new Set([...post.tags, post.category])];
    tagRelevance = tagsAndCat.map(tag => {
      let index = cats.findIndex(cat => {
        if (cat._id === tag) return true;

        // Depricated - no more main
        else if (cat.main.findIndex(main => tag === main._id) > -1) {
          return true;
        }

        return false;
      });
      let topTopic = { topTopic: index > -1 };
      return this.update(
        { user, tag, community },
        { $inc: { relevance: relevanceToAdd }, topTopic },
        { upsert: true },
      ).exec();
    });

    // update category reputation
    tagRelevance.push(
      this.update(
        { user, category: post.category, community },
        { $inc: { relevance: relevanceToAdd } },
        { upsert: true },
      ).exec());

    // update global reputation
    let relevance = await this.findOneAndUpdate(
      { user, community, global: true },
      { $inc: { relevance: relevanceToAdd } },
      { upsert: true, new: true },
    );
    return relevance;
  } catch (err) {
    console.log('relevance error ', err);
    return null;
  }
  return Promise.all(tagRelevance);
};

RelevanceSchema.statics.mergeDuplicates = async function mergeDuplicates() {
  try {
    let rel = await this.find({});
    rel.forEach((rel1, i) => {
      rel.forEach((rel2, j) => {
        if (i <= j) return false;
        if (rel1.tag && rel2.tag === rel1.tag && rel1.user === rel2.user) {
          console.log(rel2, ' is a dup of ', rel1);
          rel1.relevance = Math.max(rel1.relevance, rel2.relevance);
          rel1.save();
          rel2.remove();
          return true;
        }
      });
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = mongoose.model('Relevance', RelevanceSchema);
