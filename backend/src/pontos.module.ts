import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PontosService } from './pontos.service';
import { PontosController } from './pontos.controller';
import { Pontos } from './entities/pontos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pontos])],
  providers: [PontosService],
  controllers: [PontosController],
  exports: [PontosService],
})
export class PontosModule {}
