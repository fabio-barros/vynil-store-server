import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Record } from 'src/records/records.schema';

export type OrderDocument = Order & Document;

@Schema()
export class OrderProducts {
  @Prop({ type: String, required: true })
  recordId: string;

  @Prop({ type: Number, required: true })
  qty: number;
}

@Schema()
export class Order {
  @Prop({ type: String, required: true })
  buyerId: string;

  @Prop([{ type: OrderProducts, unique: true }])
  products?: OrderProducts[];

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

  @Prop({
    type: String,
    required: true,
  })
  paymentMethod: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
