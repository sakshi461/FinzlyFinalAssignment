import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousbillsComponent } from './previousbills.component';

describe('PreviousbillsComponent', () => {
  let component: PreviousbillsComponent;
  let fixture: ComponentFixture<PreviousbillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousbillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousbillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
