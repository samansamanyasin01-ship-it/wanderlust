import { Schema, model } from 'mongoose';

const postSchema = new Schema({
  authorName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  imageLink: {
    type: String,
    required: true,
  },
  categories: {
    type: [String],
    validate: [(val: string[]) => val.length <= 3, 'Categories cannot exceed 3 items'],
  },
  description: String,
  isFeaturedPost: {
    type: Boolean,
    default: false,
  },
  timeOfPost: {
    type: Date,
    default: Date.now,
  },
  authorId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default model('Post', postSchema);
