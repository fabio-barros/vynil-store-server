import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { OrderType } from 'src/orders/entities/order.entity';

@ObjectType({ description: 'user' })
export class UserView {
  @Field(() => ID, { description: 'UserID' })
  id: string;

  @Field({ description: 'Email' })
  email: string;

  @Field({ description: 'Username' })
  username: string;

  @Field(() => [OrderType])
  orders: OrderType[];
}
