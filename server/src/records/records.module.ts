import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecordsResolver } from './records.resolver';
import { RecordSchema } from './records.schema';
import { RecordsService } from './records.service';
import { DateScalar } from '../common/data.scalar';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Record', schema: RecordSchema }]),
  ],
  providers: [RecordsResolver, RecordsService, DateScalar],
})
export class RecordsModule {}
