import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly UserRepository: Repository<User>,
      ) {}

      async findOneByToken(token: string): Promise<User> {
          return await this.UserRepository.findOne(token);
      }

      async findAll(): Promise<User[]> {
        return await this.UserRepository.find();
      }
      getAllUsers(): string {
        return 'Hello Users!';
      }

      async getUserById(id: string): Promise<User> {
          return await this.UserRepository.findOne(id);
      }
}
