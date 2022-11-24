import { Module } from '@nestjs/common';
import { comentariosController } from './controllers/comentarios.controller';
import { ComentariosService } from './services/comentarios.service';

@Module({
  controllers: [comentariosController],
  providers: [ComentariosService],
  exports: [ComentariosService],
})
export class ComentariosModule {}
