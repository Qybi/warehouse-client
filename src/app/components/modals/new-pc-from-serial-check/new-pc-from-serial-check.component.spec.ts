import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPcFromSerialCheckComponent } from './new-pc-from-serial-check.component';

describe('NewPcFromSerialCheckComponent', () => {
  let component: NewPcFromSerialCheckComponent;
  let fixture: ComponentFixture<NewPcFromSerialCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPcFromSerialCheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewPcFromSerialCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
