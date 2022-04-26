import { Field, ObjectType } from '@nestjs/graphql';
import { UserView } from 'src/users/entities/user-view.entity';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class LoginResponse {
  @Field()
  access_token: string;

  @Field()
  user: UserView;
}
