import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field({ description: 'User Name' })
  username: string;

  @Field({ description: 'User Password' })
  password: string;
}
