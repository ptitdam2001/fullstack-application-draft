import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { helloWorld } from '@stack/core'

@Injectable()
export class AppService {
  constructor(@Inject('USER_SERVICE') private client: ClientProxy) {}

  getItemById(id: number) {
    return this.client.send({ cmd: 'user_get_byId' }, id)
  }

  create(user: { email: string; password: string }) {
    return this.client.send({ cmd: 'user_create' }, user)
  }

  getList() {
    return this.client.send({ cmd: 'user_list' }, {})
  }

  getHello(): string {
    return helloWorld()
  }
}
