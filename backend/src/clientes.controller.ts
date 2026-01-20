import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ClientesService } from './clientes.service';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientes: ClientesService) {}

  @Post()
  criar(@Body() body: any) {
    return this.clientes.criar(body);
  }

  @Get()
  listar() {
    return this.clientes.listar();
  }

  @Get(':id')
  buscarPorId(@Param('id') id: string) {
    return this.clientes.buscarPorId(id);
  }

  @Get('cpf/:cpf')
  buscarPorCPF(@Param('cpf') cpf: string) {
    return this.clientes.buscarPorCPF(cpf);
  }
}
