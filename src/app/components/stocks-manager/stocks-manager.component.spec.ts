import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksManagerComponent } from './stocks-manager.component';

describe('StocksManagerComponent', () => {
  let component: StocksManagerComponent;
  let fixture: ComponentFixture<StocksManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StocksManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StocksManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
