import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateComentarioDto,
  UpdateComentarioDto,
} from '../dtos/comentarios.dtos';
import { comentario } from '../entities/comentario.entity';

@Injectable()
export class ComentariosService {
  private counterId = 1;
  private comentarios: comentario[] = [
    {
      id: 1,
      parrafo: 'comentario uno',
      actividad: 'Esto es prueba de actividad',
      trimestre: 2,
    },
  ];

  findAll() {
    return this.comentarios;
  }

  findOne(id: number) {
    const comentario = this.comentarios.find((item) => item.id === id);
    if (!comentario) {
      throw new NotFoundException(`Comentario ${id} not found`);
    }
    return comentario;
  }

  create(data: CreateComentarioDto) {
    this.counterId = this.counterId + 1;
    const newComentario = {
      id: this.counterId,
      ...data,
    };
    this.comentarios.push(newComentario);
    return newComentario;
  }

  update(id: number, changes: UpdateComentarioDto) {
    const comentario = this.findOne(id);
    const index = this.comentarios.findIndex((item) => item.id === id);
    this.comentarios[index] = {
      ...comentario,
      ...changes,
    };
    return this.comentarios[index];
  }

  remove(id: number) {
    const index = this.comentarios.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Comentario ${id} not found`);
    }
    this.comentarios.splice(index, 1);
    return true;
  }
}
