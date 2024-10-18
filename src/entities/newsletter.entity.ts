import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('newsletters')
export class Newsletter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  subscribed_at: Date;
}
