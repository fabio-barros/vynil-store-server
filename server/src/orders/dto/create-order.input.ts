import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { isEmail } from 'class-validator';
import { RecordInput } from 'src/records/dto/new-record-input.dto';
import { RecordType } from 'src/records/models/record.model';

@InputType()
export class OrderProductsInput {
  @Field()
  recordId: string;
  @Field()
  qty: number;
}
@InputType()
export class CreateOrderInput {
  @Field({ description: 'Id of the user associated with the order' })
  buyerId: string;

  @Field(() => [OrderProductsInput])
  products: OrderProductsInput[];

  @Field()
  status: string;

  @Field()
  address: string;

  @Field()
  houseNumber: string;

  @Field()
  city: string;

  @Field()
  postalCode: string;

  @Field()
  state: string;

  @Field()
  itemsPrice: string;

  @Field()
  shippingPrice: string;

  @Field()
  totalPrice: string;

  @Field()
  paymentMethod: string;
}
