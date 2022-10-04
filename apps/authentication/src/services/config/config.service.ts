export class ConfigService {
  private readonly envConfig: { [key: string]: any } = null;

  constructor() {
    this.envConfig = {
      port: process.env.SERVICE_AUTHENTICATION_HOST,
      host: process.env.SERVICE_AUTHENTICATION_POST,
    };
  }

  get(key: string): any {
    return this.envConfig[key];
  }
}
