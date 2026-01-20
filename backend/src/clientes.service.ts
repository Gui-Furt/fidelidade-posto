import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

export interface Cliente {
  id: string;
  nome: string;
  cpf: string;
  telefone?: string;
  email?: string;
  dataCadastro: Date;
}

@Injectable()
export class ClientesService {
  private clientes: Cliente[] = [];

  criar(dados: Omit<Cliente, 'id' | 'dataCadastro'>): Cliente {
    const novo = {
      id: randomUUID(),
      dataCadastro: new Date(),
      ...dados,
    };

    this.clientes.push(novo);
    return novo;
  }

  listar() {
    return this.clientes;
  }

  buscarPorId(id: string) {
    return this.clientes.find(c => c.id === id);
  }

  buscarPorCPF(cpf: string) {
    return this.clientes.find(c => c.cpf === cpf);
  }
}
