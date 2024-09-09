"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    views: { type: Number, required: true },
    likes: { type: Number, required: true },
    createdDate: { type: Date, required: false },
    lastUpdateDate: { type: Date, required: false },
});
const Post = mongoose_1.default.model('Post', postSchema);
exports.default = Post;
//# sourceMappingURL=post.model.js.map