import { CreateOrderInput } from './create-order.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { Record } from 'src/records/models/record.model';

@InputType()
export class UpdateOrderInput extends PartialType(CreateOrderInput) {
  @Field(() => ID)
  id: string;

  @Field({ description: 'Id of the user associated with the order' })
  buyerID: string;

  @Field(() => [Record])
  records: Record[];

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
}
