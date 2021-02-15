import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hero } from './hero';

describe('ModelComponent', () => {
  let component: Hero;
  let fixture: ComponentFixture<Hero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hero]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
