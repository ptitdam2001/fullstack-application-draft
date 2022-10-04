import { Module } from '@nestjs/common'
import { ClientProxyFactory } from '@nestjs/microservices'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigService } from './services'

@Module({
  imports: [],
  controllers: [AppController],
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
