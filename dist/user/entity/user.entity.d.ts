import { Document } from 'mongoose';
export declare class UserEntity extends Document {
    name: string;
    birthday: Date;
    email: string;
    password: string;
    gender: string;
}
export declare const UserSchema: import("mongoose").Schema<UserEntity, import("mongoose").Model<UserEntity, any, any, any, Document<unknown, any, UserEntity> & UserEntity & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserEntity, Document<unknown, {}, import("mongoose").FlatRecord<UserEntity>> & import("mongoose").FlatRecord<UserEntity> & Required<{
    _id: unknown;
}>>;
