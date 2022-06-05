import { Document } from 'mongoose';
import * as dayjs from 'dayjs';
import { Record } from 'src/records/interfaces/record.interface';

export interface OrderProducts extends Record {
  readonly recordId: string;
  readonly qty: number;
}
export interface Order extends Document {
  readonly id: string;

  readonly buyerId: string;

  readonly products: OrderProducts[];

  readonly status: string;

  readonly address: string;

  readonly houseNumber: string;

  readonly city: string;

  readonly postalCode: string;

  readonly state: string;

  readonly itemsPrice: string;

  readonly shippingPrice: string;

  readonly totalPrice: string;

  readonly paymentMethod: string;
}
