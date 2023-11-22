import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartOpenslopesComponent } from './chart-openslopes.component';

describe('ChartOpenslopesComponent', () => {
  let component: ChartOpenslopesComponent;
  let fixture: ComponentFixture<ChartOpenslopesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartOpenslopesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartOpenslopesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
