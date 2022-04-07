import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from 'src/users/models/users.model';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.jwtSecret,
      usernameField: 'email',
    });
  }

  async validate(validationPayload: {
    email: string;
    sub: string;
  }): Promise<User | null> {
    return this.userService.getUserByEmail(validationPayload.email);
  }
}
