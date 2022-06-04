import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateOrderInput } from './dto/create-order.input';
import { OrderType } from './entities/order.entity';
import { Order } from './interfaces/order.interface';
@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(OrderType.name) private itemModel: Model<OrderType>,
  ) {}

  async create(createItemDto: CreateOrderInput): Promise<OrderType> {
    const createdItem = new this.itemModel(createItemDto);
    return await createdItem.save();
  }

  async findAll(): Promise<OrderType[]> {
    return await this.itemModel.find().exec();
  }

  async findOne(id: string): Promise<OrderType> {
    return await this.itemModel.findOne({ _id: id });
  }

  async delete(id: string): Promise<OrderType> {
    return await this.itemModel.findByIdAndRemove(id);
  }

  async update(id: string, item: Order): Promise<OrderType> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}
