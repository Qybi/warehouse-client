import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiviAccessoriComponent } from './archivi-accessori.component';

describe('ArchiviAccessoriComponent', () => {
  let component: ArchiviAccessoriComponent;
  let fixture: ComponentFixture<ArchiviAccessoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchiviAccessoriComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchiviAccessoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
