import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseItemDetailsComponent } from './purchase-item-details.component';

describe('PurchaseItemDetailsComponent', () => {
  let component: PurchaseItemDetailsComponent;
  let fixture: ComponentFixture<PurchaseItemDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseItemDetailsComponent]
    });
    fixture = TestBed.createComponent(PurchaseItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
