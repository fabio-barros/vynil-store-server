import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType({ description: 'user' })
export class UserView {
  @Field(() => ID, { description: 'UserID' })
  id: string;

  @Field({ description: 'UserName' })
  username: string;
}
