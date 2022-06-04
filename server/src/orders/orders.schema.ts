import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Record } from 'src/records/records.schema';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ type: String, required: true })
  buyerID: string;

  @Prop([{ type: Record, required: true, unique: true }])
  products: Record[];

  @Prop({
    type: String,
    required: true,
  })
  status: string;

  @Prop({
    type: String,
    required: true,
  })
  address: string;

  @Prop({
    type: String,
    required: true,
  })
  houseNumber: string;

  @Prop({
    type: String,
    required: true,
  })
  city: string;

  @Prop({
    type: String,
    required: true,
  })
  postalCode: string;

  @Prop({
    type: String,
    required: true,
  })
  state: string;

  @Prop({
    type: String,
    required: true,
  })
  itemsPrice: string;

  @Prop({
    type: String,
    required: true,
  })
  shippingPrice: string;

  @Prop({
    type: String,
    required: true,
  })
  totalPrice: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
