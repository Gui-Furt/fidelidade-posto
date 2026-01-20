import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientesModule } from './clientes.module';
import { TransacoesModule } from './transacoes.module';
import { PontosModule } from './pontos.module';
import { ApiKeyModule } from './api-key.module';
import { IntegracaoController } from './integracao.controller';

@Module({
  imports: [
    ClientesModule,
    TransacoesModule,
    PontosModule,
    ApiKeyModule,
  ],
  controllers: [AppController, IntegracaoController],
})
export class AppModule {}
