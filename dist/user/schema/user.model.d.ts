import mongoose from 'mongoose';
declare const User: mongoose.Model<{
    name: string;
    birthday: Date;
    email: string;
    password: string;
    gender: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    birthday: Date;
    email: string;
    password: string;
    gender: string;
}> & {
    name: string;
    birthday: Date;
    email: string;
    password: string;
    gender: string;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    birthday: Date;
    email: string;
    password: string;
    gender: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    birthday: Date;
    email: string;
    password: string;
    gender: string;
}>> & mongoose.FlatRecord<{
    name: string;
    birthday: Date;
    email: string;
    password: string;
    gender: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default User;
