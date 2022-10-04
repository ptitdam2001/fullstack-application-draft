import { NestFactory } from '@nestjs/core';
import {
  MicroserviceOptions,
  TcpOptions,
  Transport,
} from '@nestjs/microservices';
import { AppModule } from './app.module';
import { ConfigService } from './services';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: new ConfigService().get('port'),
      },
    } as TcpOptions,
  );

  await app.listen();
}
bootstrap();
