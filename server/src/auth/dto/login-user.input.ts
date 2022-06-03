import { Field, InputType } from '@nestjs/graphql';

@InputType({ description: 'Login Input' })
export class LoginUserInput {
  @Field({ description: 'Email used when user registered.', name: 'username' })
  username: string;

  @Field({ description: 'Password used when user registered.' })
  password: string;
}
