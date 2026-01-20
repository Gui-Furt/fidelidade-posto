import { Injectable } from '@nestjs/common';

@Injectable()
export class PontosService {

  calcularPontos(
    tipo: 'combustivel' | 'eletrico' | 'loja' | 'servico',
    quantidade: number,
    valor: number,
    unidade: 'litros' | 'kWh' | 'minutos' | 'itens'
  ): number {

    // Combustível → 1 ponto por litro
    if (tipo === 'combustivel') {
      return Math.round(quantidade * 1);
    }

    // Eletrico → 1 ponto por kWh
    if (tipo === 'eletrico' && unidade === 'kWh') {
      return Math.round(quantidade * 1);
    }

    // Elétrico → 1 ponto a cada 5 minutos
    if (tipo === 'eletrico' && unidade === 'minutos') {
      return Math.floor(quantidade / 5);
    }

    // Loja → 1 ponto por R$ 2
    if (tipo === 'loja') {
      return Math.floor(valor / 2);
    }

    // Serviço → 1 ponto por R$ 3
    if (tipo === 'servico') {
      return Math.floor(valor / 3);
    }

    return 0;
  }
}
