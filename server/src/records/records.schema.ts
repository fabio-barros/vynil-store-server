import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as dayjs from 'dayjs';
import mongoose from 'mongoose';
import { Document } from 'mongoose';

export type RecordDocument = Record & Document;

@Schema()
export class Review {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Number, required: true })
  rating: number;

  @Prop({ type: String, required: true })
  comment: string;
}

@Schema()
export class Producer {
  @Prop({ type: String, required: true })
  name: string;
}

@Schema()
export class Record {
  @Prop({ type: String, required: true })
  artistName: string;

  @Prop({
    type: String,
    required: true,
  })
  albumName: string;

  @Prop({ type: Date })
  releaseDate: Date;

  @Prop([Producer])
  producers: Producer[];

  @Prop()
  albumCover: string;

  @Prop()
  genres: string[];

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  qtyInStock: number;

  @Prop()
  rating: number;

  @Prop([Review])
  review: Review[];

  @Prop()
  reviewsQty: number;
}

export const RecordSchema = SchemaFactory.createForClass(Record);
