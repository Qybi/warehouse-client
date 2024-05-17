import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCourseComponent } from './modal-course.component';

describe('ModalCourseComponent', () => {
  let component: ModalCourseComponent;
  let fixture: ComponentFixture<ModalCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
