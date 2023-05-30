import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { BannerComponent } from './banner/banner.component';
import { CarrouselSelectionComponent } from './carrousel-selection/carrousel-selection.component';
import { ClaimCtaComponent } from './claim-cta/claim-cta.component';
import { HowWorksComponent } from './how-works/how-works.component';
import { CarrouselThumbnailsComponent } from './carrousel-thumbnails/carrousel-thumbnails.component';
import { SimpleTextBlockComponent } from './simple-text-block/simple-text-block.component';
import { CtasTextBlockComponent } from './ctas-text-block/ctas-text-block.component';

@NgModule({
  declarations: [
    WellcomeComponent,
    BannerComponent,
    CarrouselSelectionComponent,
    ClaimCtaComponent,
    HowWorksComponent,
    CarrouselThumbnailsComponent,
    SimpleTextBlockComponent,
    CtasTextBlockComponent,
  ],
  imports: [CommonModule],
  exports: [
    WellcomeComponent,
    BannerComponent,
    CarrouselSelectionComponent,
    ClaimCtaComponent,
    HowWorksComponent,
    CarrouselThumbnailsComponent,
    SimpleTextBlockComponent,
    CtasTextBlockComponent,
  ],
})
export class ComponentsHomeModule {}
