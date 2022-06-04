import { Document } from 'mongoose';
import * as dayjs from 'dayjs';
import { Record } from 'src/records/interfaces/record.interface';

export interface Order extends Document {
  readonly id: string;

  readonly buyerID: string;

  readonly products: Record[];

  readonly address: string;

  readonly houseNumber: string;

  readonly city: string;

  readonly postalCode: string;

  readonly state: string;

  readonly itemsPrice: string;

  readonly shippingPrice: string;

  readonly totalPrice: string;
}
