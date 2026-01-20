import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';

import { ClientesModule } from './clientes.module';
import { TransacoesModule } from './transacoes.module';
import { PontosModule } from './pontos.module';
import { ApiKeyModule } from './api-key.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    ClientesModule,
    TransacoesModule,
    PontosModule,
    ApiKeyModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
