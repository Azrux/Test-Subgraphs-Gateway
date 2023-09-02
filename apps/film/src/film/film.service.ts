import { Injectable } from '@nestjs/common';
import { Film } from '../entities/film.entity';

@Injectable()
export class FilmService {
  private readonly film: Film[] = [
    {
      id: '1',
      title: 'The Matrix',
      description: 'A sci-fi action film',
      rating: 8.7,
      type: 'MOVIE',
      image: 'matrix.jpg',
      trailer: 'matrix-trailer.mp4',
      clasification: {
        id: '4',
      },
      supportedLanguages: [
        {
          id: '1',
        },
        {
          id: '2',
        },
      ],
      supportedSubtitleLanguages: [
        {
          id: '1',
        },
        {
          id: '2',
        },
      ],
      genre: [
        {
          id: '1',
        },
        {
          id: '2',
        },
      ],
      technicalInfo: {
        duration: "120'",
        director: 'Lana Wachowski',
        mainActors: ['Keanu Reeves', 'Carrie-Anne Moss'],
        launchYear: '1999',
        country: 'USA',
      },
    },
    {
      id: '2',
      title: 'Inception',
      description: 'A mind-bending thriller',
      rating: 8.8,
      type: 'MOVIE',
      image: 'inception.jpg',
      trailer: 'inception-trailer.mp4',
      clasification: {
        id: '3',
      },
      supportedLanguages: [
        {
          id: '1',
        },
        {
          id: '2',
        },
      ],
      supportedSubtitleLanguages: [
        {
          id: '1',
        },
        {
          id: '2',
        },
      ],
      genre: [
        {
          id: '3',
        },
        {
          id: '4',
        },
      ],
      technicalInfo: {
        duration: "148'",
        director: 'Christopher Nolan',
        mainActors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt'],
        launchYear: '2010',
        country: 'USA',
      },
    },
  ];

  findAll() {
    return this.film;
  }

  findOne(id: string) {
    return this.film.find((film) => film.id === id); // TODO: Ask about this
  }
}
