import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginatedListDto } from 'src/common/dto/paginated-list.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  /**
   *
   */
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto) {
    createPostDto.slug = this.generateSlug(createPostDto.title);
    return await this.postRepository.save(createPostDto);
  }

  async findAll(
    paginationQuery: PaginationQueryDto,
  ): Promise<PaginatedListDto<Post>> {
    const totalCount = await this.postRepository.count();
    if (paginationQuery.globalFilter) {
    }
    const data = await this.postRepository.find({
      skip: paginationQuery.offset,
      take: paginationQuery.limit,
    });
    return {
      data,
      totalCount,
    };
  }

  async findOne(id: string) {
    return await this.postRepository.findOne(id);
  }

  async findOneBySlug(slug: string) {
    return await this.postRepository.findOne({ where: { slug } });
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    updatePostDto.slug = this.generateSlug(updatePostDto.title);
    return await this.postRepository.update(id, updatePostDto);
  }

  async remove(id: string) {
    const post = await this.findOne(id);
    return this.postRepository.remove(post);
  }

  private generateSlug(title: string): string {
    return title.replace(/ /g, '-').toLocaleLowerCase();
  }
}
