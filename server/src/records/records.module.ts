import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecordsResolver } from './records.resolver';
import { RecordSchema } from './records.schema';
import { RecordsService } from './records.service';
import { DateScalar } from '../common/data.scalar';
import { RecordType } from './models/record.model';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RecordType.name, schema: RecordSchema },
    ]),
  ],
  providers: [RecordsResolver, RecordsService],
})
export class RecordsModule {}
