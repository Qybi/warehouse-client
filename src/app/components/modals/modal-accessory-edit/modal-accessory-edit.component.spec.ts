import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAccessoryEditComponent } from './modal-accessory-edit.component';

describe('ModalAccessoryEditComponent', () => {
  let component: ModalAccessoryEditComponent;
  let fixture: ComponentFixture<ModalAccessoryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAccessoryEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalAccessoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
