import {
  ConflictException,
  Injectable,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserView } from 'src/users/entities/user-view.entity';
import { User } from 'src/users/users.schema';
import { UsersService } from 'src/users/users.service';
import { LoginResponse } from './dto/login-response';
import { LoginUserInput } from './dto/login-user.input';
import * as bcrypt from 'bcrypt';
import { CreateUserInput } from 'src/users/dto/create-user.input';
import { RegisterUserInput } from './dto/register-user.input';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<UserView> {
    console.log('validate user');
    console.log(email, password);
    const user = await this.usersService.findOne(email);
    if (!user) {
      // // throw Error('User not found.');
      throw new NotFoundException('User not found.');
      // return null;
    }
    const valid = await bcrypt.compare(password, user.password);
    console.log('-', user, valid);
    if (user && valid) {
      console.log('if');
      // const { password, ...result } = user;
      return {
        id: user.id,
        username: user.username,
        email: user.email,
        orders: user.orders,
      };
    }

    return null;
  }

  async login(user: UserView): Promise<LoginResponse> {
    // console.log('login-> ', loginCredentials);
    // const user = await this.usersService.findOne(loginCredentials.email);
    console.log('login-> ', user);
    // const { password, ...result } = user;
    if (!user) {
      throw new NotFoundException('User not found.');
    }

    return {
      access_token: this.jwtService.sign({
        username: user.username,
        sub: user.id,
      }),
      user: user,
    };
  }
  // async login(loginUserInput: LoginUserInput): Promise<LoginResponse> {
  //   const user = await this.usersService.findOne(loginUserInput.username);
  //   // const { password, ...result } = user;
  //   console.log('login service');
  //   console.log('login-> ', user);
  //   console.log('login-> ', loginUserInput.username);
  //   if (!user) {
  //     // // throw Error('User not found.');
  //     throw new NotFoundException();
  //     // return null;
  //   }
  //   return {
  //     access_token: this.jwtService.sign({
  //       username: user.username,
  //       sub: user.id,
  //     }),
  //     user: user,
  //   };
  // }

  async register(registerInput: CreateUserInput): Promise<User> {
    const user = await this.usersService.findOne(registerInput.username);
    console.log(user);
    if (user) {
      console.log('exception');
      throw new ConflictException('User already exists.');
    }
    console.log(user);
    const password = await bcrypt.hash(registerInput.password, 10);

    return this.usersService.create({ ...registerInput, password });
  }
}
