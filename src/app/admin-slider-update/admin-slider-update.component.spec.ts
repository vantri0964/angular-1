import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSliderUpdateComponent } from './admin-slider-update.component';

describe('AdminSliderUpdateComponent', () => {
  let component: AdminSliderUpdateComponent;
  let fixture: ComponentFixture<AdminSliderUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSliderUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSliderUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
