import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { NewRecordInput } from './dto/new-record-input.dto';
import { RecordsArgs } from './dto/records.args';
import { Record } from './interfaces/record.interface';
import { Model } from 'mongoose';

@Injectable()
export class RecordsService {
  constructor(
    @InjectModel('Record') private readonly recordModel: Model<Record>,
  ) {}
  async create(createRecordDto: NewRecordInput): Promise<Record> {
    const createdRecord = new this.recordModel(createRecordDto);
    return await createdRecord.save();
  }
  // async findOneById(id: string): Promise<Record> {
  //   return {} as any;
  // }
  async findAll(): Promise<Record[]> {
    return [] as Record[];
  }
  async remove(id: string): Promise<boolean> {
    return true;
  }
}