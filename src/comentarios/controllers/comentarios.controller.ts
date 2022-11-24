import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  CreateComentarioDto,
  UpdateComentarioDto,
} from '../dtos/comentarios.dtos';
import { ComentariosService } from '../services/comentarios.service';
import { ParseIntPipe } from '../../common/parse-int.pipe';

@Controller('comentarios')
export class comentariosController {
  constructor(private ComentariosService: ComentariosService) {}

  @Get()
  getComentarios(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return this.ComentariosService.findAll();
  }

  @Get('filter')
  getComentarioFilter() {
    return `Yo soy un filtro`;
  }

  @Get(':comentarioId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('comentarioId', ParseIntPipe) comentarioId: number) {
    return this.ComentariosService.findOne(comentarioId);
  }

  @Post()
  create(@Body() payload: CreateComentarioDto) {
    return this.ComentariosService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateComentarioDto) {
    return this.ComentariosService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.ComentariosService.remove(+id);
  }
}
