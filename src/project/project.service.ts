import { Project } from './entities/project.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProjectService {
  /**
   *
   */
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  create(createProjectDto: CreateProjectDto): Promise<Project> {
    return this.projectRepository.save(createProjectDto);
  }

  findAll(): Promise<Project[]> {
    return this.projectRepository.find();
  }

  findOne(id: string) {
    return this.projectRepository.findOne(id);
  }

  update(id: string, updateProjectDto: UpdateProjectDto) {
    updateProjectDto.updatedAt = new Date();
    return this.projectRepository.update(id, updateProjectDto);
  }

  async remove(id: string) {
    const project = await this.findOne(id);
    return this.projectRepository.remove(project);
  }
}
