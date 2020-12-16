import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsAndCitiesComponent } from './hotels-and-cities.component';

describe('HotelsAndCitiesComponent', () => {
  let component: HotelsAndCitiesComponent;
  let fixture: ComponentFixture<HotelsAndCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelsAndCitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsAndCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
