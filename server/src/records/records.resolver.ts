import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { NewRecordInput } from './dto/new-record-input.dto';
import { RecordsArgs } from './dto/records.args';
// import { Record } from './interfaces/record.interface';
import { Record } from './models/record.model';
import { RecordsService } from './records.service';

const pubSub = new PubSub();

@Resolver((of) => Record)
export class RecordsResolver {
  constructor(private readonly recordsService: RecordsService) {}
  @Query((returns) => [Record])
  async records(): Promise<Record[]> {
    return this.recordsService.findAll();
  }

  @Query((returns) => Record)
  async getRecord(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Record> {
    return this.recordsService.findOneById(id);
  }

  @Mutation((returns) => Record)
  async createRecord(@Args('input') input: NewRecordInput) {
    console.log(input.releaseDate);
    const createdRecord = this.recordsService.create(input);
    pubSub.publish('recordCreated', { createdRecord: createdRecord });
    return createdRecord;
  }
}
