import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { CreateUserInput } from './dto/create-user.input';
import { UserView } from './entities/user-view.entity';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  // async findAll(): Promise<User[]> {
  //   // return await this.userModel.find();
  //   return this.users;
  // }
  async findOne(username: string): Promise<User> {
    const user = await this.userModel.findOne({ email: username }).exec();
    console.log('login-> ', user);
    return user;
    // const user = this.users.find((u) => u.username === username);
    // if (!user) {
    //   // // throw Error('User not found.');
    //   // throw new NotFoundException();
    //   return null;
    // }
    // return await user;
  }

  async create(registerInput: CreateUserInput): Promise<User> {
    const registeredUser = new this.userModel(registerInput);
    console.log('registered user-> ', registeredUser);
    return registeredUser.save();
  }
}
