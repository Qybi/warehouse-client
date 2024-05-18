import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalImportFileComponent } from './modal-import-file.component';

describe('ModalImportFileComponent', () => {
  let component: ModalImportFileComponent;
  let fixture: ComponentFixture<ModalImportFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalImportFileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalImportFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
