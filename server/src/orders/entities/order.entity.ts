import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Record } from 'src/records/models/record.model';

@ObjectType({ description: 'user' })
export class Order {
  @Field(() => ID, { description: 'Order Id' })
  id: string;

  @Field(() => ID, { description: 'Id of the user associated with the order' })
  buyerID: string;

  @Field(() => [Record])
  products: Record[];

  @Field()
  status: string;
}
