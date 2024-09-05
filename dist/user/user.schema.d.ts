import { Schema } from 'mongoose';
export declare const UserSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    name?: string;
    age?: number;
    email?: string;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    name?: string;
    age?: number;
    email?: string;
}>> & import("mongoose").FlatRecord<{
    name?: string;
    age?: number;
    email?: string;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;
