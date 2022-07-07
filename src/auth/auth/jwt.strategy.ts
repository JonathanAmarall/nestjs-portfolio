import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'jwtsecretjonliçalksdçlaksdndo',
    });
  }

  async validate(payload: any) {
    return {
      role: payload.role,
      username: payload.username,
      email: payload.email,
      id: payload.id,
    };
  }
}
