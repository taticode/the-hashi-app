import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtasTextBlockComponent } from './ctas-text-block.component';

describe('CtasTextBlockComponent', () => {
  let component: CtasTextBlockComponent;
  let fixture: ComponentFixture<CtasTextBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtasTextBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtasTextBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
