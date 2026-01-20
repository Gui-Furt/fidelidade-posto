import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transacao } from './entities/transacao.entity';
import { PontosService } from './pontos.service';
import { ClientesService } from './clientes.service';

@Injectable()
export class TransacoesService {
  constructor(
    @InjectRepository(Transacao)
    private readonly repo: Repository<Transacao>,
    private readonly pontos: PontosService,
    private readonly clientes: ClientesService,
  ) {}

  async registrar(dados: any) {
    const cliente = await this.clientes.buscarPorId(dados.clienteId);

    const pontosGerados = this.pontos.calcularPontos(
      dados.tipo,
      dados.quantidade,
      dados.valor,
      dados.unidade,
    );

    const transacao = this.repo.create({
      ...dados,
      cliente,
      pontosGerados,
    });

    return this.repo.save(transacao);
  }

  listarPorCliente(clienteId: string) {
    return this.repo.find({
      where: { cliente: { id: clienteId } },
      order: { data: 'DESC' },
    });
  }
}
