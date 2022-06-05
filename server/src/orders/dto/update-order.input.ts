import { CreateOrderInput } from './create-order.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { RecordType } from 'src/records/models/record.model';
import { RecordInput } from 'src/records/dto/new-record-input.dto';
@InputType()
export class OrderProductsInput {
  @Field()
  recordId: string;
  @Field()
  qty: number;
}
@InputType()
export class UpdateOrderInput extends PartialType(CreateOrderInput) {
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
