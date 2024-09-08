import { Schema } from 'mongoose';
export declare const UserSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    name?: string;
    email?: string;
    age?: number;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    name?: string;
    email?: string;
    age?: number;
}>> & import("mongoose").FlatRecord<{
    name?: string;
    email?: string;
    age?: number;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;
