import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private readonly repo: Repository<Cliente>,
  ) {}

  criar(dados: Partial<Cliente>) {
    const cliente = this.repo.create(dados);
    return this.repo.save(cliente);
  }

  listar() {
    return this.repo.find();
  }

  buscarPorId(id: string) {
    return this.repo.findOne({ where: { id } });
  }

  buscarPorCPF(cpf: string) {
    return this.repo.findOne({ where: { cpf } });
  }
}
