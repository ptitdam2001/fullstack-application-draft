export class ConfigService {
  private readonly envConfig: { [key: string]: any } = null;

  constructor() {
    this.envConfig = {
      port: process.env.SERVICE_USER_PORT,
      host: process.env.SERVICE_USER_HOST,
    };
  }

  get(key: string): any {
    return this.envConfig[key];
  }
}
