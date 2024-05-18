import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReturnComponent } from './modal-return.component';

describe('ModalReturnComponent', () => {
  let component: ModalReturnComponent;
  let fixture: ComponentFixture<ModalReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalReturnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
