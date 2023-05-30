import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RestaurantDetailComponent } from './pages/restaurant-detail/restaurant-detail.component';
import { SearchMapComponent } from './pages/search-map/search-map.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchMapComponent },
  { path: 'detail/:id', component: RestaurantDetailComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
