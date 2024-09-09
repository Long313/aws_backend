import mongoose from 'mongoose';
declare const Post: mongoose.Model<{
    description: string;
    title: string;
    author: string;
    views: number;
    likes: number;
    createdDate?: Date;
    lastUpdateDate?: Date;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    description: string;
    title: string;
    author: string;
    views: number;
    likes: number;
    createdDate?: Date;
    lastUpdateDate?: Date;
}> & {
    description: string;
    title: string;
    author: string;
    views: number;
    likes: number;
    createdDate?: Date;
    lastUpdateDate?: Date;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    description: string;
    title: string;
    author: string;
    views: number;
    likes: number;
    createdDate?: Date;
    lastUpdateDate?: Date;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    description: string;
    title: string;
    author: string;
    views: number;
    likes: number;
    createdDate?: Date;
    lastUpdateDate?: Date;
}>> & mongoose.FlatRecord<{
    description: string;
    title: string;
    author: string;
    views: number;
    likes: number;
    createdDate?: Date;
    lastUpdateDate?: Date;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default Post;
