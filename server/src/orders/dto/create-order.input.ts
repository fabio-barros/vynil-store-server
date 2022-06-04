import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { isEmail } from 'class-validator';
import { RecordInput } from 'src/records/dto/new-record-input.dto';
import { RecordType } from 'src/records/models/record.model';

@InputType()
export class CreateOrderInput {
  @Field(() => ID, { description: 'Order Id' })
  id: string;

  @Field({ description: 'Id of the user associated with the order' })
  buyerID: string;

  @Field(() => [RecordInput])
  products: RecordInput[];

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
