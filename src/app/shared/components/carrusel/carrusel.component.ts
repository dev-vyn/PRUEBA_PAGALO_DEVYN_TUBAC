import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit, OnDestroy {
  peliculas = [
    { titulo: 'Interstellar', imagen: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg' },
    { titulo: 'Inception', imagen: 'https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg' },
    { titulo: 'Dune: Part Two', imagen: 'https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg' },
    { titulo: 'The Batman', imagen: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg' },
    { titulo: 'Oppenheimer', imagen: 'https://image.tmdb.org/t/p/w500/bAFmcrk5ZtP0gA04QD3xd3qYbaM.jpg' },
    { titulo: 'Avatar 2', imagen: 'https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg' },
    { titulo: 'Guardians of the Galaxy 3', imagen: 'https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg' }
  ];

  indiceActual = 0;
  intervalo: any;
  visibleCount = 4;
  cardWidth = 250;

  ngOnInit() {
    this.ajustarPeliculasVisibles();
    this.intervalo = setInterval(() => this.siguiente(), 5000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalo);
  }

  anterior() {
    if (this.indiceActual > 0) {
      this.indiceActual--;
    } else {
      this.indiceActual = Math.max(0, this.peliculas.length - this.visibleCount);
    }
  }

  siguiente() {
    if (this.indiceActual < this.peliculas.length - this.visibleCount) {
      this.indiceActual++;
    } else {
      this.indiceActual = 0;
    }
  }

  @HostListener('window:resize')
  ajustarPeliculasVisibles() {
    const width = window.innerWidth;
    if (width < 640) this.visibleCount = 1;
    else if (width < 1024) this.visibleCount = 2;
    else this.visibleCount = 4;
  }
}
