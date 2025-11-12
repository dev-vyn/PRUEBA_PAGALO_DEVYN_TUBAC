import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home/home.component';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { MoviesComponent } from './features/movies/pages/movies/movies.component';
import { MovieDetailComponent } from './features/movies/pages/movie-detail/movie-detail.component';
import { PopularMoviesComponent } from './features/movies/pages/movie-popular/movie-popular.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'peliculas', component: MoviesComponent, canActivate: [AuthGuard] },
  { path: 'peliculas/:id', component: MovieDetailComponent, canActivate: [AuthGuard] },
  { path: 'populares', component: PopularMoviesComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];
