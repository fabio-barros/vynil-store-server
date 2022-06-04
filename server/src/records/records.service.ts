import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RecordInput } from './dto/new-record-input.dto';
import { RecordsArgs } from './dto/records.args';
// import { Record } from './interfaces/record.interface';
import { Model } from 'mongoose';
import { RecordType } from './models/record.model';
import { Record } from './interfaces/record.interface';

@Injectable()
export class RecordsService {
  constructor(
    @InjectModel('RecordType') private readonly recordModel: Model<RecordType>,
  ) {}
  async create(createRecordDto: RecordInput): Promise<RecordType> {
    console.log(createRecordDto.releaseDate);

    const createdRecord = new this.recordModel(createRecordDto);
    return await createdRecord.save();
  }

  async findOneById(id: string): Promise<RecordType> {
    return this.recordModel.findById(id);
  }

  async findAll(): Promise<RecordType[]> {
    return await this.recordModel.find();
  }

  async delete(id: string): Promise<RecordType> {
    return await this.recordModel.findByIdAndRemove({ id });
  }
  async update(id: string, item: Record): Promise<RecordType> {
    return await this.recordModel.findByIdAndUpdate(id, item, { new: true });
  }
}
