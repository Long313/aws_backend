import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  views: { type: Number, required: true },
  likes: { type: Number, required: true },
  createdDate: { type: Date, required: false },
  lastUpdateDate: { type: Date, required: false },
});

const Post = mongoose.model('Post', postSchema);

export default Post;
