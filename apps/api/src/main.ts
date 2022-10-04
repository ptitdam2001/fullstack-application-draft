import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './api.module'
import { ConfigService } from './services'

const config = new ConfigService()

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const options = new DocumentBuilder().setTitle('API docs').addTag('users').setVersion('1.0').build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('docs', app, document)
  await app.listen(config.get('port'))
}
bootstrap()
