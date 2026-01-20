import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { ApiKeyGuard } from './api-key.guard';
import { TransacoesService } from './transacoes.service';
import { ClientesService } from './clientes.service';

@Controller('integracao')
export class IntegracaoController {
  constructor(
    private readonly transacoes: TransacoesService,
    private readonly clientes: ClientesService,
  ) {}

  @Post('registrar')
  @UseGuards(ApiKeyGuard)
  registrar(@Body() body: any, @Req() req: any) {
    const { cpf, tipo, quantidade, unidade, valor } = body;

    let cliente = this.clientes.buscarPorCPF(cpf);
    if (!cliente) {
      cliente = this.clientes.criar({ nome: 'Cliente PDV', cpf });
    }

    return this.transacoes.registrar({
      clienteId: cliente.id,
      tipo,
      quantidade,
      unidade,
      valor,
    });
  }
}
