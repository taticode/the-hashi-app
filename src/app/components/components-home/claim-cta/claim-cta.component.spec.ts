import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimCtaComponent } from './claim-cta.component';

describe('ClaimCtaComponent', () => {
  let component: ClaimCtaComponent;
  let fixture: ComponentFixture<ClaimCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimCtaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
