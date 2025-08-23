// src/auth/jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'YOUR_SECRET_KEY', // Same secret as in AuthModule
    });
  }

  async validate(payload: any) {
    // The payload is the decoded JWT. You can add more user info here.
    return { userId: payload.sub, email: payload.email };
  }
}