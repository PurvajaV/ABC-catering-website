import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierCheckoutComponent } from './supplier-checkout.component';

describe('SupplierCheckoutComponent', () => {
  let component: SupplierCheckoutComponent;
  let fixture: ComponentFixture<SupplierCheckoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierCheckoutComponent]
    });
    fixture = TestBed.createComponent(SupplierCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
