import { NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { Movie } from './entities/Movie.entity';

export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    const movie = this.movies.find((movie) => movie.id == +id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} Not found.`);
    }
    return movie;
  }

  deleteOne(id: string): boolean {
    this.movies.filter((movie) => movie.id !== +id);
    return true;
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }
}
