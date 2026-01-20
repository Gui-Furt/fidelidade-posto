import { Module } from '@nestjs/common';
import { PontosService } from './pontos.service';
import { PontosController } from './pontos.controller';

@Module({
  providers: [PontosService],
  controllers: [PontosController],
  exports: [PontosService],
})
export class PontosModule {}
