import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierCartComponent } from './supplier-cart.component';

describe('SupplierCartComponent', () => {
  let component: SupplierCartComponent;
  let fixture: ComponentFixture<SupplierCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierCartComponent]
    });
    fixture = TestBed.createComponent(SupplierCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
