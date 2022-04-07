import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/models/users.model';
import { UsersService } from 'src/users/users.service';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validate(email: string, password: string): Promise<User> {
    const user = this.userService.getUserByEmail(email);
    if (!user) {
      return null;
    }
    const passwordIsValid = password === user.password;
    return passwordIsValid ? user : null;
  }

  async login(user: User): Promise<{ access_token: string }> {
    const payload = { email: user.email, sub: user.userId };

    return { access_token: this.jwtService.sign(payload) };
  }

  async verify(token: string): Promise<User> {
    const decoded = this.jwtService.verify(token, {
      secret: process.env.jwtSecret,
    });

    const user = this.userService.getUserByEmail(decoded.email);
    if (!user) {
      throw new Error('Unable to get user grom decoded token.');
    }
    return user;
  }
}
