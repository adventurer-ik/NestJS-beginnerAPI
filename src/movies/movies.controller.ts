/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) { }

    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll();
    }

    @Get(":id")
    getOne(@Param("id") movieId: number): Movie {
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDTO) {
        return this.moviesService.create(movieData);
    }

    @Delete(':id')
    remove(@Param('id') movieId: number) {
        return this.moviesService.deleteOne(movieId)
    }

    @Patch(':id')
    path(@Param('id') movieId: number, @Body() updateData) {
        return this.moviesService.update(movieId, updateData);
    }
}
