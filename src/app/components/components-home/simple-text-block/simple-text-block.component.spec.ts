import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTextBlockComponent } from './simple-text-block.component';

describe('SimpleTextBlockComponent', () => {
  let component: SimpleTextBlockComponent;
  let fixture: ComponentFixture<SimpleTextBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleTextBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleTextBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
