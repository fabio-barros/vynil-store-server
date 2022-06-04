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
  async items(): Promise<OrderType[]> {
    return this.orderService.findAll();
  }

  @Mutation((returns) => OrderType)
  async createItem(@Args('input') input: CreateOrderInput): Promise<OrderType> {
    return this.orderService.create(input);
  }

  //   @Mutation((returns) => OrderType)
  //   async updateItem(
  //     @Args('id') id: string,
  //     @Args('input') input: CreateOrderInput,
  //   ) {
  //     return this.orderService.update(id, input as Order);
  //   }

  @Mutation((returns) => OrderType)
  async deleteItem(@Args('id') id: string) {
    return this.orderService.delete(id);
  }

  @Query((returns) => String)
  async hello() {
    return 'hello';
  }
}
