import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiviStudentiComponent } from './archivi-studenti.component';

describe('ArchiviStudentiComponent', () => {
  let component: ArchiviStudentiComponent;
  let fixture: ComponentFixture<ArchiviStudentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchiviStudentiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchiviStudentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
