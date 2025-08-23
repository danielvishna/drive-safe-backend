import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/schemas/user.schema';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UsersModule, JwtStrategy, JwtService, UsersService],
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET, // Use a more secure key, preferably from env variables
      signOptions: { expiresIn: '59m' },
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
})
export class AuthModule {}
