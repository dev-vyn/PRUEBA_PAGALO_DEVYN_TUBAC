import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { MoviesService } from '../../services/movies.service';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-movie-popular',
  standalone: true,
  imports: [NavbarComponent, CommonModule, RouterModule, FormsModule, LucideAngularModule, FooterComponent],
  templateUrl: './movie-popular.component.html',
  styleUrls: ['./movie-popular.component.css'],
})
export class PopularMoviesComponent implements OnInit {
  peliculas: any[] = [];
  pagina = 1;
  cargando = false;
  query = '';
  startDate = '';
  endDate = '';

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit(): void {
    this.cargarPopulares();
  }

  cargarPopulares(): void {
    if (this.cargando) return;
    this.cargando = true;

    this.moviesService.getPopularMovies(this.pagina).subscribe((res: any) => {
      const nuevasPeliculas = res.results || [];
      this.peliculas = [...this.peliculas, ...nuevasPeliculas];
      this.peliculas.sort((a: any, b: any) => b.popularity - a.popularity);

      this.cargando = false;
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !this.cargando) {
      this.pagina++;
      this.cargarPopulares();
    }
  }

  buscar(): void {
    this.pagina = 1;
    this.peliculas = [];

    this.moviesService
      .buscarPeliculas(this.query, this.startDate, this.endDate)
      .subscribe((res: any) => {
        this.peliculas = res.results || [];
      });
  }

  verDetalle(id: number): void {
    this.router.navigate(['/peliculas', id]);
  }
}
