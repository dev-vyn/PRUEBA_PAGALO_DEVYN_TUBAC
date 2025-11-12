import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../../services/movies.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FormsModule, RouterModule, FooterComponent],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  peliculas: any[] = [];
  page = 1;
  cargando = false;
  query = '';
  startDate = '';
  endDate = '';

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.cargarPeliculas();
  }

  cargarPeliculas(reset = false) {
    if (this.cargando) return;
    this.cargando = true;

    if (reset) {
      this.peliculas = [];
      this.page = 1;
    }

    this.moviesService.getMovies(this.page, this.query, this.startDate, this.endDate)
      .subscribe((res) => {
        this.peliculas.push(...res.results);
        this.page++;
        this.cargando = false;
      });
  }

  buscar() {
    if (!this.query && !this.startDate && !this.endDate) {
      alert('Ingresa un nombre o selecciona una fecha para filtrar.');
      return;
    }

    this.cargarPeliculas(true);
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 400 && !this.cargando) {
      this.cargarPeliculas();
    }
  }
}
