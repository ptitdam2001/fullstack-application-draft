import { NestFactory } from '@nestjs/core';
import {
  MicroserviceOptions,
  TcpOptions,
  Transport,
} from '@nestjs/microservices';
import { UserModule } from './user.module';
import { ConfigService } from './services';

async function bootstrap() {
  const config = new ConfigService();

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: config.get('port'),
      },
    } as TcpOptions,
  );

  await app.listen().then(() => {
    console.log('User service available on port: ' + config.get('port'));
  });
}
bootstrap();
