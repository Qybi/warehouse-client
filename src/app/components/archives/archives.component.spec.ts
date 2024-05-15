import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivesComponent } from './archives.component';

describe('ArchivesComponent', () => {
  let component: ArchivesComponent;
  let fixture: ComponentFixture<ArchivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchivesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
