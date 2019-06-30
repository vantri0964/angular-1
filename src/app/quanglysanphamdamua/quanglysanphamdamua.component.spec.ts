import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanglysanphamdamuaComponent } from './quanglysanphamdamua.component';

describe('QuanglysanphamdamuaComponent', () => {
  let component: QuanglysanphamdamuaComponent;
  let fixture: ComponentFixture<QuanglysanphamdamuaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanglysanphamdamuaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanglysanphamdamuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
