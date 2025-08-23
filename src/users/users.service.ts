import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from '../auth/dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findOne(email: string): Promise<UserDocument | undefined | null> {
    return this.userModel.findOne({ email });
  }

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    return this.userModel.insertOne(createUserDto);
  }
}
