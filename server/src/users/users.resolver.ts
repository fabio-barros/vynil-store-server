import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  @UseGuards(JwtAuthGuard)
  async users() {
    return await this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  async user(@Args('username', { type: () => String }) username: string) {
    return await this.usersService.findOne(username);
  }

  // @Mutation(() => User, { name: 'createUser' })
  // async createUser(@Args('username', { type: () => String }) username: string) {
  //   return await this.usersService.findOne(username);
  // }
}
