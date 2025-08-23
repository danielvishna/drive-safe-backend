// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { AuthController } from '../auth/auth.controller';
// import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../auth/jwt.strategy';

@Module({
  imports: [
    // UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'YOUR_SECRET_KEY', // Use a more secure key, preferably from env variables
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
})
export class UsersModule {}
