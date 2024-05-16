import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAssignBundleComponent } from './modal-assign-bundle.component';

describe('ModalAssignBundleComponent', () => {
  let component: ModalAssignBundleComponent;
  let fixture: ComponentFixture<ModalAssignBundleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAssignBundleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalAssignBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
