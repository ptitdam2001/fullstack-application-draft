import { Controller, HttpStatus } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { IUser } from './interface';
import { UserService } from './services';
import { MicroserviceResponse } from '@stack/core';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @MessagePattern('user_get_byId')
  async getUserById(id: string): Promise<MicroserviceResponse<IUser>> {
    if (!id) {
      return {
        status: HttpStatus.BAD_REQUEST,
        message: 'user_get_byId_bad_request',
        user: null,
      };
    }

    const user = await this.service.getById(id);

    if (user) {
      return {
        status: HttpStatus.OK,
        message: 'user_get_byId_success',
        user,
      };
    } else {
      return {
        status: HttpStatus.NOT_FOUND,
        message: 'user_get_byId_not_found',
        user: null,
      };
    }
  }

  @MessagePattern('user_list')
  async getList(): Promise<MicroserviceResponse<IUser[]>> {
    const list = await this.service.getAll();

    return {
      status: HttpStatus.OK,
      message: 'user_list',
      user: list,
      errors: null,
    };
  }

  @MessagePattern('user_create')
  async create(user: IUser): Promise<MicroserviceResponse<IUser>> {
    try {
      const creation = await this.service.create(user);

      return {
        status: HttpStatus.CREATED,
        message: 'user_create_success',
        user: creation,
        errors: null,
      };
    } catch (e) {
      return {
        status: HttpStatus.PRECONDITION_FAILED,
        message: 'user_create_precondition_failed',
        user: null,
        errors: e.errors,
      };
    }
  }
}
