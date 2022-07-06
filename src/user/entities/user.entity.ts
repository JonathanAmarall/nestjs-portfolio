import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, nullable: false })
  username: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column({ type: 'timestamp', default: 'now' })
  date: Date;
}
