import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoredetailsItemComponent } from './moredetails-item.component';

describe('MoredetailsItemComponent', () => {
  let component: MoredetailsItemComponent;
  let fixture: ComponentFixture<MoredetailsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoredetailsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoredetailsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
