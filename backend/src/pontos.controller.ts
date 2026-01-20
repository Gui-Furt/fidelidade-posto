import { Controller, Post, Body } from '@nestjs/common';
import { PontosService } from './pontos.service';

@Controller('pontos')
export class PontosController {
  constructor(private readonly pontos: PontosService) {}

  @Post('calcular')
  calcular(@Body() body: any) {
    const { tipo, quantidade, valor, unidade } = body;
    const pts = this.pontos.calcularPontos(tipo, quantidade, valor, unidade);
    return { pontos: pts };
  }
}
