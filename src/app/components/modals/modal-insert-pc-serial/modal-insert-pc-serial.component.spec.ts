import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInsertPcSerialComponent } from './modal-insert-pc-serial.component';

describe('ModalInsertPcSerialComponent', () => {
  let component: ModalInsertPcSerialComponent;
  let fixture: ComponentFixture<ModalInsertPcSerialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalInsertPcSerialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalInsertPcSerialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
