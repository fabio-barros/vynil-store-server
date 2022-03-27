import { Document } from 'mongoose';

export interface Review extends Document {
  readonly name: string;
  readonly rating: number;
  readonly comment: string;
}

export interface Producer extends Document {
  readonly name: string;
}

export interface Record extends Document {
  readonly id: string;

  readonly artistName: string;

  readonly albumName: string;

  readonly releaseDate: Date;

  readonly producers: Producer[];

  readonly albumCover: string;

  readonly genres: string[];

  readonly description: string;

  readonly price: number;

  readonly qtyInStock: number;

  readonly rating: number;

  readonly reviews: Review[];

  readonly reviewsQty: number;
}
