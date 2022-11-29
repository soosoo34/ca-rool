import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WearAnalysisComponent } from './wear-analysis.component';

describe('WearAnalysisComponent', () => {
  let component: WearAnalysisComponent;
  let fixture: ComponentFixture<WearAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WearAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WearAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
