import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPcEditComponent } from './modal-pc-edit.component';

describe('ModalPcEditComponent', () => {
  let component: ModalPcEditComponent;
  let fixture: ComponentFixture<ModalPcEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPcEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalPcEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
