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
    console.log(createRecordDto.releaseDate);

    const createdRecord = new this.recordModel(createRecordDto);
    return await createdRecord.save();
  }
  async findOneById(id: string): Promise<Record> {
    return this.recordModel.findById(id);
  }
  async findAll(): Promise<Record[]> {
    return await this.recordModel.find();
  }
  async remove(id: string): Promise<boolean> {
    await this.recordModel.findByIdAndDelete;
    return true;
  }
}
