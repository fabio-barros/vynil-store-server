import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { UpdateOrderInput } from 'src/orders/dto/update-order.input';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => ID)
  id: string;

  @Field({ description: 'Username' })
  username: string;

  @Field({ description: 'Email' })
  email: string;

  @Field({ description: 'User Password' })
  password: string;

  @Field(() => [UpdateOrderInput])
  orders: UpdateOrderInput[];
}
