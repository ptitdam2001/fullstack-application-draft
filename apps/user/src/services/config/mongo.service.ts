import {
  MongooseOptionsFactory,
  MongooseModuleOptions,
} from '@nestjs/mongoose';

export class MongoConfigService implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    const user = process.env.DATABASE_USERNAME;
    const pass = process.env.DATABASE_PASSWORD;
    const server = process.env.DATABASE_HOST;
    const port = process.env.DATABASE_PORT;
    const dbName = process.env.DATABASE_NAME;

    let userPass = '';

    if (user && pass) {
      userPass = `${user}:${pass}@`;
    }

    const uri = `mongodb://${userPass}${server}:${port}?retryWrites=false`;

    return {
      uri,
      dbName,
    };
  }
}
