import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedessalariesComponent } from './listedessalaries.component';

describe('ListedessalariesComponent', () => {
  let component: ListedessalariesComponent;
  let fixture: ComponentFixture<ListedessalariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListedessalariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListedessalariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
