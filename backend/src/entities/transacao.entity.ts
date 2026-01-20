import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cliente } from './cliente.entity';

export type TipoTransacao = 'combustivel' | 'eletrico' | 'loja' | 'servico';

@Entity()
export class Transacao {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Cliente, { eager: true })
  cliente: Cliente;

  @Column({ type: 'enum', enum: ['combustivel', 'eletrico', 'loja', 'servico'] })
  tipo: TipoTransacao;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  valor: number;

  @Column({ type: 'decimal', precision: 10, scale: 3 })
  quantidade: number;

  @Column({ length: 20 })
  unidade: string; // litros | kWh | minutos | itens

  @Column({ type: 'int' })
  pontosGerados: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  data: Date;
}
