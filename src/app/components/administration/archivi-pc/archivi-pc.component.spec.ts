import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiviPCComponent } from './archivi-pc.component';

describe('ArchiviPCComponent', () => {
  let component: ArchiviPCComponent;
  let fixture: ComponentFixture<ArchiviPCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchiviPCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchiviPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
