import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanglysanphamdanggiaoComponent } from './quanglysanphamdanggiao.component';

describe('QuanglysanphamdanggiaoComponent', () => {
  let component: QuanglysanphamdanggiaoComponent;
  let fixture: ComponentFixture<QuanglysanphamdanggiaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanglysanphamdanggiaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanglysanphamdanggiaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
