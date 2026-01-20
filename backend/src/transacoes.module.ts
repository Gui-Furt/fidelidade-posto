import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransacoesService } from './transacoes.service';
import { TransacoesController } from './transacoes.controller';
import { Transacao } from './entities/transacao.entity';
import { PontosModule } from './pontos.module';
import { ClientesModule } from './clientes.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Transacao]),
    PontosModule,
    ClientesModule,
  ],
  providers: [TransacoesService],
  controllers: [TransacoesController],
  exports: [TransacoesService],
})
export class TransacoesModule {}
