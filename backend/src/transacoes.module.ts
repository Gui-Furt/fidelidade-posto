import { Module } from '@nestjs/common';
import { TransacoesService } from './transacoes.service';
import { TransacoesController } from './transacoes.controller';
import { ClientesModule } from './clientes.module';

@Module({
  imports: [ClientesModule],
  providers: [TransacoesService],
  controllers: [TransacoesController],
})
export class TransacoesModule {}
