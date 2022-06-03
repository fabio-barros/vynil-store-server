import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { isEmail } from 'class-validator';
import { Record } from 'src/records/models/record.model';

@InputType()
export class CreateUserInput {
  @Field(() => ID, { description: 'Order Id' })
  id: string;

  @Field(() => ID, { description: 'Id of the user associated with the order' })
  buyerID: string;

  @Field(() => [Record])
  reviews: Record[];

  @Field()
  status: string;
}
