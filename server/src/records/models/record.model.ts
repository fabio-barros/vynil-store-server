import { Directive, Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';
import * as dayjs from 'dayjs';

@ObjectType({ description: 'review ' })
export class ReviewType {
  @Field()
  name: string;

  @Field()
  rating: number;

  @Field()
  comment: string;
}

@ObjectType({ description: 'review ' })
export class ProducerType {
  @Field()
  name: string;
}

@ObjectType({ description: 'record ' })
export class RecordType {
  @Field(() => ID)
  id: string;

  @Field()
  artistName: string;

  @Field()
  albumName: string;

  @Field(() => Int)
  releaseDate: number;

  @Field(() => [ProducerType])
  producers: ProducerType[];

  @Field()
  albumCover: string;

  @Field(() => [String])
  genres: string[];

  @Field()
  description: string;

  @Field(() => Float)
  @Field()
  price: number;

  @Field(() => Int)
  qtyInStock: number;

  @Field(() => Float)
  rating: number;

  @Field(() => [ReviewType])
  reviews: ReviewType[];

  @Field()
  reviewsQty: number;
}
