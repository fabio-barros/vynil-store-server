import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { subscribe } from 'graphql';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserView } from 'src/users/entities/user-view.entity';
import { User } from 'src/users/users.schema';

import { UsersService } from 'src/users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.jwtSecret,
    });
  }

  async validate(payload: any): Promise<UserView> {
    return { id: payload.sub, username: payload.username };
  }
}
