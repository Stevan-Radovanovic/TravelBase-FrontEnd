import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAndCardsComponent } from './users-and-cards.component';

describe('UsersAndCardsComponent', () => {
  let component: UsersAndCardsComponent;
  let fixture: ComponentFixture<UsersAndCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersAndCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersAndCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
