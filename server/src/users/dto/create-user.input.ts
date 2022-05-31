import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { isEmail } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field({ description: 'Username' })
  username: string;

  @Field({ description: 'User Password' })
  password: string;
}
