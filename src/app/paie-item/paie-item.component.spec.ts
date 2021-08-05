import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaieItemComponent } from './paie-item.component';

describe('PaieItemComponent', () => {
  let component: PaieItemComponent;
  let fixture: ComponentFixture<PaieItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaieItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
