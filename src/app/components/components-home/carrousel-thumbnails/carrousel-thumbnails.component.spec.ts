import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselThumbnailsComponent } from './carrousel-thumbnails.component';

describe('CarrouselThumbnailsComponent', () => {
  let component: CarrouselThumbnailsComponent;
  let fixture: ComponentFixture<CarrouselThumbnailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselThumbnailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselThumbnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
