import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewStudentTicketComponent } from './modal-new-student-ticket.component';

describe('ModalNewStudentTicketComponent', () => {
  let component: ModalNewStudentTicketComponent;
  let fixture: ComponentFixture<ModalNewStudentTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalNewStudentTicketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalNewStudentTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
