import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselSelectionComponent } from './carrousel-selection.component';

describe('CarrouselSelectionComponent', () => {
  let component: CarrouselSelectionComponent;
  let fixture: ComponentFixture<CarrouselSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
