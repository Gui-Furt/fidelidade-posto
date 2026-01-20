import { Module } from '@nestjs/common';
import { TransacoesService } from './transacoes.service';
import { TransacoesController } from './transacoes.controller';
import { ClientesModule } from './clientes.module';
import { PontosModule } from './pontos.module';

@Module({
  imports: [ClientesModule, PontosModule],
  providers: [TransacoesService],
  controllers: [TransacoesController],
})
export class TransacoesModule {}
