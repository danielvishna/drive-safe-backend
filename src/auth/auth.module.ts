import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/schemas/user.schema';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UsersModule, JwtStrategy, JwtService, UsersService],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
})
export class AuthModule {}
