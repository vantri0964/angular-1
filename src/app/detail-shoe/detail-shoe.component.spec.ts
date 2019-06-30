import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailShoeComponent } from './detail-shoe.component';

describe('DetailShoeComponent', () => {
  let component: DetailShoeComponent;
  let fixture: ComponentFixture<DetailShoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailShoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailShoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
