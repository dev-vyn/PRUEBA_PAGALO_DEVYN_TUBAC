import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule, RouterModule, FormsModule],
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  pelicula: any;
  reparto: any[] = [];
  equipo: any[] = [];
  relacionadas: any[] = [];
  votoUsuario: number | null = null;
  cargando = true;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.cargarDetalles(id);
      this.cargarReparto(id);
      this.cargarRelacionadas(id);
    }
  }

  cargarDetalles(id: number) {
    this.moviesService.getMovieDetails(id).subscribe((res) => {
      this.pelicula = res;
      this.cargando = false;
    });
  }

  cargarReparto(id: number) {
    this.moviesService.getMovieCredits(id).subscribe((res: any) => {
      this.reparto = res.cast?.slice(0, 10) || [];
      this.equipo = res.crew
        ? res.crew.filter((p: any) => ['Director', 'Writer', 'Screenplay'].includes(p.job))
        : [];
    });
  }

  cargarRelacionadas(id: number) {
    this.moviesService.getRelatedMovies(id).subscribe((res: any) => {
      this.relacionadas = res.results?.slice(0, 6) || [];
    });
  }

  votar() {
    alert(`¡Gracias por votar con ${this.votoUsuario} estrellas! 🌟`);
    this.votoUsuario = null;
  }
}
