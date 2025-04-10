import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Book extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: false })
  genre: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  published_year: number;

  @Prop([String]) 
  characters: string[];

  @Prop({
    type: {
      critics: { type: Number, required: true },
      readers: { type: Number, required: true },
    },
  })
  ratings: {
    critics: number;
    readers: number;
  };
}

export const BookSchema =SchemaFactory.createForClass(Book)
