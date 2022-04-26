import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserView } from 'src/users/entities/user-view.entity';
import { User } from 'src/users/users.schema';
import { UsersService } from 'src/users/users.service';
import { LoginResponse } from './dto/login-response';
import { LoginUserInput } from './dto/login-user.input';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    const valid = await bcrypt.compare(password, user.password);
    if (user && valid) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: UserView): Promise<LoginResponse> {
    // const user = await this.usersService.findOne(loginUserInput.username);
    // const { password, ...result } = user;

    return {
      access_token: this.jwtService.sign({
        username: user.username,
        sub: user.id,
      }),
      user: user,
    };
  }

  async register(registerInput: LoginUserInput): Promise<UserView> {
    const user = await this.usersService.findOne(registerInput.username);
    if (user) {
      throw new ConflictException('User already exists');
    }
    const password = await bcrypt.hash(registerInput.password, 10);

    return this.usersService.create({ ...registerInput, password });
  }
}
