import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnalysisFormComponent } from './create-analysis-form.component';

describe('CreateAnalysisFormComponent', () => {
  let component: CreateAnalysisFormComponent;
  let fixture: ComponentFixture<CreateAnalysisFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAnalysisFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAnalysisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
