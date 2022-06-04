import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { RecordType } from 'src/records/models/record.model';

@ObjectType({ description: 'user' })
export class OrderType {
  @Field(() => ID, { description: 'Order Id' })
  id: string;

  @Field(() => ID, { description: 'Id of the user associated with the order' })
  buyerID: string;

  @Field(() => [RecordType])
  products: RecordType[];

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
