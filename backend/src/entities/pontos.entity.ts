import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column } from 'typeorm';
import { Cliente } from './cliente.entity';

@Entity()
export class Pontos {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Cliente, { eager: true })
  @JoinColumn()
  cliente: Cliente;

  @Column({ type: 'int', default: 0 })
  saldo: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  atualizadoEm: Date;
}
