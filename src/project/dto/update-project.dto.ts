import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDto } from './create-project.dto';

export class UpdateProjectDto {
  title: string;
  description: string;
  cover: string;
  updatedAt: Date;
}
