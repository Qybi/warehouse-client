import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAssignAccessoriesComponent } from './modal-assign-accessories.component';

describe('ModalAssignAccessoriesComponent', () => {
  let component: ModalAssignAccessoriesComponent;
  let fixture: ComponentFixture<ModalAssignAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAssignAccessoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalAssignAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
