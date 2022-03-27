import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecordsResolver } from './records.resolver';
import { RecordSchema } from './records.schema';
import { RecordsService } from './records.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Record', schema: RecordSchema }]),
  ],
  providers: [RecordsResolver, RecordsService],
})
export class RecordsModule {}
