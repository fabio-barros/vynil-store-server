import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { OrderType } from './entities/order.entity';
import { Order } from './interfaces/order.interface';
import { OrdersService } from './orders.service';

@Resolver()
export class OrdersResolver {
  constructor(private readonly orderService: OrdersService) {}

  @Query((returns) => [OrderType])
  async orders(): Promise<OrderType[]> {
    return this.orderService.findAll();
  }

  @Query((returns) => OrderType, {
    name: 'order',
    description: 'Returns one order entity by Id.',
  })
  async order(
    @Args('id', { type: () => String }) id: string,
  ): Promise<OrderType> {
    return this.orderService.findOne(id);
  }

  @Query((returns) => OrderType, {
    name: 'ordersByUserID',
    description: 'Returns all the orders made by an User.',
  })
  async ordersByUserID(
    @Args('userId', { type: () => String }) userId: string,
  ): Promise<OrderType> {
    return this.orderService.findOne(userId);
  }

  @Mutation((returns) => OrderType)
  async createOrder(
    @Args('input') input: CreateOrderInput,
  ): Promise<OrderType> {
    console.log('create order');
    return this.orderService.create(input);
  }

  @Mutation((returns) => OrderType)
  async updateOrder(
    @Args('id') id: string,
    @Args('input') input: CreateOrderInput,
  ) {
    return this.orderService.update(id, input as Order);
  }

  @Mutation((returns) => OrderType)
  async deleteOrder(@Args('id') id: string) {
    return this.orderService.delete(id);
  }
}
