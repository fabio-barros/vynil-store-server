import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { RecordInput } from './dto/new-record-input.dto';
import { RecordsArgs } from './dto/records.args';
import { Record } from './interfaces/record.interface';
// import { Record } from './interfaces/record.interface';
import { RecordType } from './models/record.model';
import { RecordsService } from './records.service';

const pubSub = new PubSub();

@Resolver((of) => RecordType)
export class RecordsResolver {
  constructor(private readonly recordsService: RecordsService) {}

  @Query((returns) => [RecordType], {
    name: 'records',
    description: 'Returns all record entries in de database.',
  })
  async records(): Promise<RecordType[]> {
    return this.recordsService.findAll();
  }

  @Query((returns) => RecordType, {
    name: 'record',
    description: 'Returns one record entity by Id.',
  })
  async record(
    @Args('id', { type: () => String }) id: string,
  ): Promise<RecordType> {
    return this.recordsService.findOneById(id);
  }

  @Mutation((returns) => RecordType, {
    name: 'createRecord',
    description: 'Creates a record input on the database and returns it.',
  })
  async createRecord(@Args('input') input: RecordInput) {
    console.log(input.releaseDate);
    const createdRecord = this.recordsService.create(input);
    pubSub.publish('recordCreated', { createdRecord: createdRecord });
    return createdRecord;
  }

  @Mutation((returns) => RecordType)
  async updateRecord(
    @Args('id') id: string,
    @Args('input') input: RecordInput,
  ) {
    return this.recordsService.update(id, input as Record);
  }

  @Mutation((returns) => RecordType)
  async deleteRecord(@Args('id') id: string) {
    return this.recordsService.delete(id);
  }
}
