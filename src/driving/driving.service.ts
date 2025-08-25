import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DrivingLog, DrivingLogDocument } from './driving.schema';
import { DrivingData } from './dto/driving-data.dto';

@Injectable()
export class DrivingService {
  constructor(
    @InjectModel(DrivingLog.name) private drivingLogModel: Model<DrivingLogDocument>,
  ) {}

  async create(drivingData: DrivingData): Promise<DrivingLogDocument> {
    const createdLog = new this.drivingLogModel(drivingData);
    return createdLog.save();
  }
}