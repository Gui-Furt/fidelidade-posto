import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientesModule } from './clientes.module';
import { TransacoesModule } from './transacoes.module';

@Module({
  imports: [ClientesModule, TransacoesModule],
  controllers: [AppController],
})
export class AppModule {}
