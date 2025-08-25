import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DrivingModule } from './driving/driving.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/drive-safe'),
    AuthModule,
    DrivingModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
