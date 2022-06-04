import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { OrderType } from 'src/orders/entities/order.entity';

@ObjectType({ description: 'user' })
export class User {
  @Field(() => ID, { description: 'UserID' })
  id: string;

  @Field({ description: 'UserName' })
  username: string;

  @Field({ description: 'Email' })
  email: string;

  @Field({ description: 'Password' })
  password: string;

  @Field(() => [OrderType])
  orders: OrderType[];
}
