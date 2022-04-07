import { Directive, Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';
import * as dayjs from 'dayjs';

@ObjectType({ description: 'user' })
export class User {
  @Field(() => ID)
  userId: string;

  @Field()
  email: string;

  @Field(() => Int)
  age: number;

  @Field({ nullable: true })
  isSubscribed?: boolean;

  @Field({ nullable: true })
  password?: string;
}
