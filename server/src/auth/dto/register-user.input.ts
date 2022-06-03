import { Field, InputType } from '@nestjs/graphql';

@InputType({ description: 'Login Input' })
export class RegisterUserInput {
  @Field()
  username: string;

  @Field()
  email: string;

  @Field({ description: 'Password' })
  password: string;
}
