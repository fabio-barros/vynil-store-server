import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecordsResolver } from './records.resolver';
import { RecordSchema } from './records.schema';
import { RecordsService } from './records.service';
import { DateScalar } from '../common/data.scalar';
import { RecordType } from './models/record.model';
import { Record } from './interfaces/record.interface';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Record', schema: RecordSchema }]),
  ],
  providers: [RecordsResolver, RecordsService],
})
export class RecordsModule {}
