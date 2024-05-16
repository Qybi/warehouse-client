import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAssignPcComponent } from './modal-assign-pc.component';

describe('ModalAssignPcComponent', () => {
  let component: ModalAssignPcComponent;
  let fixture: ComponentFixture<ModalAssignPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAssignPcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalAssignPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
