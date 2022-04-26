import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class ReviewInput {
  @Field()
  name: string;

  @Field()
  rating: number;

  @Field()
  comment: string;
}

@InputType()
export class ProducerInput {
  @Field()
  name: string;
}

@InputType()
export class NewRecordInput {
  @Field()
  @MaxLength(30)
  readonly artistName: string;

  @Field()
  readonly albumName: string;

  @Field(() => Int)
  readonly releaseDate: number;

  @Field(() => [ProducerInput])
  readonly producers: ProducerInput[];

  @Field()
  readonly albumCover: string;

  @Field(() => [String])
  readonly genres: string[];

  @Field()
  readonly description: string;

  @Field(() => Float)
  readonly price: number;

  @Field(() => Int)
  readonly qtyInStock: number;

  @Field(() => Float)
  readonly rating: number;

  @Field(() => [ReviewInput])
  readonly reviews: ReviewInput[];

  @Field(() => Float)
  readonly reviewsQty: number;
}
