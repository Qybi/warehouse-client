import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateStockComponent } from './modal-create-stock.component';

describe('ModalCreateStockComponent', () => {
  let component: ModalCreateStockComponent;
  let fixture: ComponentFixture<ModalCreateStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCreateStockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalCreateStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
