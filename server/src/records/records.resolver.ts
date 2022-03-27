import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { NewRecordInput } from './dto/new-record-input.dto';
import { RecordsArgs } from './dto/records.args';
// import { Record } from './interfaces/record.interface';
import { Record } from './models/record-view.model';
import { RecordsService } from './records.service';

const pubSub = new PubSub();

@Resolver((of) => Record)
export class RecordsResolver {
  constructor(private readonly recordsService: RecordsService) {}
  @Query((returns) => [Record])
  async records(): Promise<Record[]> {
    return this.recordsService.findAll();
  }
  @Mutation((returns) => [Record])
  async createRecord(@Args('input') input: NewRecordInput) {
    return this.recordsService.create(input);
  }
}
