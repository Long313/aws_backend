import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class PostEntity extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, unique: true })
  author: string;

  @Prop({ required: true })
  views: number;

  @Prop({ required: true })
  likes: number;
}

export const PostSchema = SchemaFactory.createForClass(PostEntity);
