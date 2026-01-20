import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientesModule } from './clientes.module';

@Module({
  imports: [ClientesModule],
  controllers: [AppController],
})
export class AppModule {}
