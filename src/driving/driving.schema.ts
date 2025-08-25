import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DrivingLogDocument = HydratedDocument<DrivingLog>;

@Schema()
export class DrivingLog {
  @Prop({ required: true })
  isDriving: boolean;

  @Prop({ required: true })
  speed: number;

  @Prop({ required: true })
  latitude: number;

  @Prop({ required: true })
  longitude: number;

  @Prop({ default: Date.now })
  timestamp: Date;
}

export const DrivingLogSchema = SchemaFactory.createForClass(DrivingLog);