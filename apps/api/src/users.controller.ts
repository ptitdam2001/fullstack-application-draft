import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common'
import { firstValueFrom } from 'rxjs'
import { AppService } from './app.service'
import { CreateUserDto } from './interfaces'

@Controller()
export class UsersController {
  constructor(private readonly appService: AppService) {}

  @Post('user')
  public async createUser(@Body() userRequest: CreateUserDto): Promise<any> {
    const createUserResponse: any = await firstValueFrom(this.appService.create(userRequest))
    if (createUserResponse.status !== HttpStatus.CREATED) {
      throw new HttpException(
        {
          message: createUserResponse.message,
          data: null,
          errors: createUserResponse.errors,
        },
        createUserResponse.status,
      )
    }

    return {
      message: createUserResponse.message,
      data: {
        user: createUserResponse.user,
      },
      errors: null,
    }
  }

  @Get()
  public async getAll(): Promise<any> {
    const response = await firstValueFrom(this.appService.getList())
    if (response.status !== HttpStatus.OK) {
      throw new HttpException(
        {
          message: response.message,
          data: null,
          errors: response.errors,
        },
        response.status,
      )
    }

    return {
      message: response.message,
      data: {
        users: response.user,
      },
      errors: null,
    }
  }
}
