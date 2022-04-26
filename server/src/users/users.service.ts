import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { CreateUserInput } from './dto/create-user.input';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}
  private users = [
    { id: '1', username: 'Du', password: '123' },
    { id: '2', username: 'Dudu', password: '231' },
    {
      id: '3',
      username: 'Edu',
      password: '312',
    },
  ];

  async findAll(): Promise<User[]> {
    // return await this.userModel.find();
    return this.users;
  }
  async findOne(userName: string): Promise<User> {
    // return await this.userModel.findOne({ username: userName }).exec();
    const user = this.users.find((u) => u.username === userName);
    // if (!user) {
    //   // throw Error('User not found.');
    //   throw new NotFoundException();
    // }
    return await user;
  }

  async create(registerInput: CreateUserInput) {
    const user = { ...registerInput, id: (this.users.length + 1).toString() };
    this.users.push(user);
    console.log(this.users);
    return user;
  }
}
