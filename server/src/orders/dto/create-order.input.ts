import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { isEmail } from 'class-validator';
import { Record } from 'src/records/models/record.model';

@InputType()
export class CreateOrderInput {
  @Field(() => ID, { description: 'Order Id' })
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
