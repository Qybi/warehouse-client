import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesManagerComponent } from './accessories-manager.component';

describe('AccessoriesManagerComponent', () => {
  let component: AccessoriesManagerComponent;
  let fixture: ComponentFixture<AccessoriesManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessoriesManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessoriesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
