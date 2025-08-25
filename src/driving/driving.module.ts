import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DrivingController } from './driving.controller';
import { DrivingService } from './driving.service';
import { DrivingLog, DrivingLogSchema } from './driving.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: DrivingLog.name, schema: DrivingLogSchema }]),
  ],
  controllers: [DrivingController],
  providers: [DrivingService],
})
export class DrivingModule {}