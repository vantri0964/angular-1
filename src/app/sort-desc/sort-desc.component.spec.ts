import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortDESCComponent } from './sort-desc.component';

describe('SortDESCComponent', () => {
  let component: SortDESCComponent;
  let fixture: ComponentFixture<SortDESCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortDESCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortDESCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
