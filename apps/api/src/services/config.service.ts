import { Transport } from '@nestjs/microservices'

export class ConfigService {
  private readonly envConfig: { [key: string]: any } = null

  constructor() {
    this.envConfig = {}
    this.envConfig.port = process.env.API_GATEWAY_PORT

    this.envConfig.userService = {
      options: {
        port: process.env.SERVICE_USER_PORT,
        host: process.env.SERVICE_USER_HOST,
      },
      transport: Transport.TCP,
    }
  }

  get(key: string): any {
    return this.envConfig[key]
  }
}
