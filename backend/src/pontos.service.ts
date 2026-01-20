import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pontos } from './entities/pontos.entity';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class PontosService {
  constructor(
    @InjectRepository(Pontos)
    private readonly repo: Repository<Pontos>,
  ) {}

  calcularPontos(tipo: string, quantidade: number, valor: number, unidade: string): number {
    if (tipo === 'combustivel') return Math.round(quantidade);
    if (tipo === 'eletrico' && unidade === 'kWh') return Math.round(quantidade);
    if (tipo === 'eletrico' && unidade === 'minutos') return Math.floor(quantidade / 5);
    if (tipo === 'loja') return Math.floor(valor / 2);
    if (tipo === 'servico') return Math.floor(valor / 3);
    return 0;
  }

  async adicionar(cliente: Cliente, pontos: number) {
    let registro = await this.repo.findOne({
      where: { cliente: { id: cliente.id } },
    });

    if (!registro) {
      registro = this.repo.create({ cliente, saldo: 0 });
    }

    registro.saldo += pontos;
    return this.repo.save(registro);
  }
}
