import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousBillsComponent } from './previous-bills.component';

describe('PreviousBillsComponent', () => {
  let component: PreviousBillsComponent;
  let fixture: ComponentFixture<PreviousBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousBillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
