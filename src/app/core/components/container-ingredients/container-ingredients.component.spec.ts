import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerIngredientsComponent } from './container-ingredients.component';

describe('ContainerIngredientsComponent', () => {
  let component: ContainerIngredientsComponent;
  let fixture: ComponentFixture<ContainerIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerIngredientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
