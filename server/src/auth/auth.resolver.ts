import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from 'src/users/dto/create-user.input';
import { UserView } from 'src/users/entities/user-view.entity';
import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login-response';
import { LoginUserInput } from './dto/login-user.input';
import { GqlAuthGuard } from './guards/gql-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  async login(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @Context() context,
  ) {
    console.log('ctx user-> ', context.user);
    return await this.authService.login(context.user);
  }

  @Mutation(() => UserView)
  async register(
    @Args('createUserInput') createUserInput: CreateUserInput,
    @Context() context,
  ) {
    return await this.authService.register(createUserInput);
  }
}
