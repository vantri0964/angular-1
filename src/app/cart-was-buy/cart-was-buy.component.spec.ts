import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartWasBuyComponent } from './cart-was-buy.component';

describe('CartWasBuyComponent', () => {
  let component: CartWasBuyComponent;
  let fixture: ComponentFixture<CartWasBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartWasBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartWasBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
