import { Controller, Post, Body } from '@nestjs/common';
import { DrivingService } from './driving.service';
import { DrivingData } from './dto/driving-data.dto';

@Controller('driving')
export class DrivingController {
  constructor(private readonly drivingService: DrivingService) {}

  @Post('log')
  async logDrivingData(@Body() drivingData: DrivingData) {
    await this.drivingService.create(drivingData);
    return { message: 'Driving data logged successfully' };
  }
}