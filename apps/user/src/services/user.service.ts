import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from 'src/interface/user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  async getById(id: string): Promise<IUser> {
    return this.userModel.findById(id);
  }

  async create(user: IUser): Promise<IUser> {
    const newModel = new this.userModel(user);
    return await newModel.save();
  }

  async getAll(): Promise<IUser[]> {
    return await this.userModel.find({});
  }

  getHello(): string {
    return 'Hello World!';
  }
}
