import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanglysanphamdahuyComponent } from './quanglysanphamdahuy.component';

describe('QuanglysanphamdahuyComponent', () => {
  let component: QuanglysanphamdahuyComponent;
  let fixture: ComponentFixture<QuanglysanphamdahuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanglysanphamdahuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanglysanphamdahuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
