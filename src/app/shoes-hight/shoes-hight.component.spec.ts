import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesHightComponent } from './shoes-hight.component';

describe('ShoesHightComponent', () => {
  let component: ShoesHightComponent;
  let fixture: ComponentFixture<ShoesHightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoesHightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesHightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
