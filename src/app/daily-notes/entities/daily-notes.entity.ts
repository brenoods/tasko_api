import { UsersEntity } from "src/app/users/entities/users.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId, UpdateDateColumn } from "typeorm";

@Entity({ name: 'daily_notes' })
export class DailyNotesEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'date' })
  date: Date;

  @Column({ name: 'location_description' })
  locationDescription: string;

  @Column({ name: 'user_id' })
  @RelationId((dailyNotes: DailyNotesEntity) => dailyNotes.user)
  userId: string;

  @Column({ name: 'notes', nullable: true })
  notes: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

  @ManyToOne((type) => UsersEntity)
  @JoinColumn({ name: 'user_id' })
  user: UsersEntity
}
