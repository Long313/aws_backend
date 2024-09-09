import { Document } from 'mongoose';
export declare class PostEntity extends Document {
    title: string;
    description: string;
    author: string;
    views: number;
    likes: number;
    createdDate?: Date;
    lastUpdateDate?: Date;
}
export declare const PostSchema: import("mongoose").Schema<PostEntity, import("mongoose").Model<PostEntity, any, any, any, Document<unknown, any, PostEntity> & PostEntity & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PostEntity, Document<unknown, {}, import("mongoose").FlatRecord<PostEntity>> & import("mongoose").FlatRecord<PostEntity> & Required<{
    _id: unknown;
}>>;
