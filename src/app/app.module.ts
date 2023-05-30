import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonsModule } from './components/commons/commons.module';
import { ComponentsHomeModule } from './components/components-home/components-home.module';
import { ComponentsRestaurantDetailModule } from './components/components-restaurant-detail/components-restaurant-detail.module';
import { ComponentsSearchMapModule } from './components/components-search-map/components-search-map.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    CommonsModule,
    ComponentsHomeModule,
    ComponentsRestaurantDetailModule,
    ComponentsSearchMapModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
