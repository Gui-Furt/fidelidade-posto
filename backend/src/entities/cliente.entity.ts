import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 200 })
  nome: string;

  @Column({ length: 14, unique: true })
  cpf: string;

  @Column({ length: 200, nullable: true })
  email: string;

  @Column({ length: 20, nullable: true })
  telefone: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  criadoEm: Date;
}
