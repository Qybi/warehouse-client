import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentManagerComponent } from './student-manager.component';

describe('StudentManagerComponent', () => {
  let component: StudentManagerComponent;
  let fixture: ComponentFixture<StudentManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
