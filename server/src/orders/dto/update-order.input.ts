import { CreateUserInput } from './create-order.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

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
}
