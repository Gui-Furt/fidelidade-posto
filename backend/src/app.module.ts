import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientesModule } from './clientes.module';
import { TransacoesModule } from './transacoes.module';
import { PontosModule } from './pontos.module';

@Module({
  imports: [ClientesModule, TransacoesModule, PontosModule],
  controllers: [AppController],
})
export class AppModule {}
