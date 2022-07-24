import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDTO } from './create-movie.dto';
// import { IsNumber, IsString } from "class-validator";

export class UpdateMovieDTO extends PartialType(CreateMovieDTO) {}
