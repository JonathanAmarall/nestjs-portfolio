import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ unique: true, nullable: false })
  slug: string;

  @Column()
  text: string;

  @Column({ type: 'timestamp', default: 'now' })
  date: Date;
}
