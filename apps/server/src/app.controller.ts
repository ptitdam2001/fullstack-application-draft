import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common'
import { firstValueFrom } from 'rxjs'
import { AppService } from './app.service'
import { CreateUserDto } from './interfaces'

@Controller()
export class AppController {
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
  getHello(): string {
    return this.appService.getHello()
  }
}
