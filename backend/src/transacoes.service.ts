import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { PontosService } from './pontos.service';

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

  constructor(private readonly pontos: PontosService) {}

  registrar(transacao: Omit<Transacao, 'id' | 'data' | 'pontosGerados'>): Transacao {

    // --- Cálculo automático dos pontos ---
    const pontosGerados = this.pontos.calcularPontos(
      transacao.tipo,
      transacao.quantidade,
      transacao.valor,
      transacao.unidade
    );

    const nova: Transacao = {
      id: randomUUID(),
      data: new Date(),
      ...transacao,
      pontosGerados
    };

    this.transacoes.push(nova);
    return nova;
  }

  listarPorCliente(clienteId: string) {
    return this.transacoes.filter(t => t.clienteId === clienteId);
  }
}
