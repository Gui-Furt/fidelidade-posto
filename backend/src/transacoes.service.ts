import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

export type TipoTransacao = 'combustivel' | 'eletrico' | 'loja' | 'servico';

export interface Transacao {
  id: string;
  clienteId: string;
  tipo: TipoTransacao;
  valor: number;
  quantidade: number;
  unidade: 'litros' | 'kWh' | 'minutos' | 'itens';
  data: Date;
  pontosGerados: number;
}

@Injectable()
export class TransacoesService {
  private transacoes: Transacao[] = [];

  registrar(transacao: Omit<Transacao, 'id' | 'data'>): Transacao {
    const nova = {
      id: randomUUID(),
      data: new Date(),
      ...transacao,
    };

    this.transacoes.push(nova);
    return nova;
  }

  listarPorCliente(clienteId: string) {
    return this.transacoes.filter(t => t.clienteId === clienteId);
  }
}
