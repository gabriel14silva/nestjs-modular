import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateComentarioDto {
  @IsString()
  @IsNotEmpty()
  readonly parrafo: string;

  @IsString()
  @IsNotEmpty()
  readonly actividad: string;

  @IsNumber()
  @IsNotEmpty()
  readonly trimestre: number;
}

export class UpdateComentarioDto extends PartialType(CreateComentarioDto) {}
