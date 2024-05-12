import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcManagerComponent } from './pc-manager.component';

describe('PcManagerComponent', () => {
  let component: PcManagerComponent;
  let fixture: ComponentFixture<PcManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PcManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
