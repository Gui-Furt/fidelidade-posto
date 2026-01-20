import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { TransacoesService } from './transacoes.service';

@Controller('transacoes')
export class TransacoesController {
  constructor(private readonly transacoes: TransacoesService) {}

  @Post()
  registrar(@Body() body: any) {
    return this.transacoes.registrar(body);
  }

  @Get('cliente/:id')
  listarPorCliente(@Param('id') id: string) {
    return this.transacoes.listarPorCliente(id);
  }
}
