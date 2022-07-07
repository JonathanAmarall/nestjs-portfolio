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

  async findByUserName(username: string): Promise<User> {
    return await this.userRepository.findOne({ username });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    var passwordEncrypted = await bcrypt.hash(createUserDto.password, 7);

    var user = new User();
    Object.assign(user, createUserDto);
    user.password = passwordEncrypted;

    return await this.userRepository.save(user);
  }
}
