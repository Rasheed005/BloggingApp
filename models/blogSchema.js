import mongoose, { mongo } from 'mongoose';

const { Schema, ObjectId } = mongoose;

const blogSchema = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    tags: [String],
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    datePublished: { type: Date, default: Date.now },
    views: Number,
    votes: Number,
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Blog = mongoose.model('Blog', blogSchema);

export { Blog };
