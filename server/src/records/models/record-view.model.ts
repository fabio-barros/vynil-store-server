import { Directive, Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'review ' })
export class Review {
  @Field()
  name: string;

  @Field()
  rating: number;

  @Field()
  comment: string;
}

@ObjectType({ description: 'review ' })
export class Producer {
  @Field()
  name: string;
}

@ObjectType({ description: 'record ' })
export class Record {
  @Field(() => ID)
  id: string;

  @Field()
  artistName: string;

  @Field()
  albumName: string;

  @Field()
  releaseDate: Date;

  @Field(() => [Producer])
  producers: Producer[];

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

  @Field(() => [Review])
  reviews: Review[];

  @Field()
  reviewsQty: number;
}
