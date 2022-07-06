import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  /**
   *
   */
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    var passwordEncrypted = await bcrypt.hash(createUserDto.password, 7);

    var user = new User();
    Object.assign(user, createUserDto);
    user.password = passwordEncrypted;

    return await this.userRepository.save(user);
  }
}
