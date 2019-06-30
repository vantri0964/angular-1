import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortASCComponent } from './sort-asc.component';

describe('SortASCComponent', () => {
  let component: SortASCComponent;
  let fixture: ComponentFixture<SortASCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortASCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortASCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
