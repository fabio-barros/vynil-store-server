import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from './orders.schema';
import { OrderType } from './entities/order.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }]),
    OrderType,
  ],
  providers: [OrdersService, OrdersResolver],
})
export class OrdersModule {}
