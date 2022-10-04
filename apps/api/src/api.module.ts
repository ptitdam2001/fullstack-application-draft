import { Module } from '@nestjs/common'
import { ClientProxyFactory } from '@nestjs/microservices'
import { UsersController } from './users.controller'
import { AppService } from './app.service'
import { ConfigService } from './services'

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [
    ConfigService,
    AppService,
    {
      provide: 'USER_SERVICE',
      useFactory: (configService: ConfigService) => {
        const userServiceOptions = configService.get('userService')
        return ClientProxyFactory.create(userServiceOptions)
      },
      inject: [ConfigService],
    },
  ],
})
export class AppModule {}
