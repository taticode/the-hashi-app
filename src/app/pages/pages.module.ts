import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SearchMapComponent } from './search-map/search-map.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { CommonsModule } from '../components/commons/commons.module';
import { ComponentsHomeModule } from '../components/components-home/components-home.module';
import { ComponentsRestaurantDetailModule } from '../components/components-restaurant-detail/components-restaurant-detail.module';
import { ComponentsSearchMapModule } from '../components/components-search-map/components-search-map.module';

@NgModule({
  declarations: [HomeComponent, SearchMapComponent, RestaurantDetailComponent],
  imports: [
    CommonModule,
    CommonsModule,
    ComponentsHomeModule,
    ComponentsRestaurantDetailModule,
    ComponentsSearchMapModule,
  ],
  exports: [HomeComponent, SearchMapComponent, RestaurantDetailComponent],
})
export class PagesModule {}
