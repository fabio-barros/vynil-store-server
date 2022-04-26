import { Field, InputType } from '@nestjs/graphql';

@InputType({ description: 'Login Input' })
export class LoginUserInput {
  @Field()
  username: string;

  @Field({ description: 'Password' })
  password: string;
}
