import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOptionCircleComponent } from './card-option-circle.component';

describe('CardOptionCircleComponent', () => {
  let component: CardOptionCircleComponent;
  let fixture: ComponentFixture<CardOptionCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardOptionCircleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOptionCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
