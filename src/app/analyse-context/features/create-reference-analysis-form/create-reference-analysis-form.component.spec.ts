import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReferenceAnalysisFormComponent } from './create-reference-analysis-form.component';

describe('CreateReferenceAnalysisFormComponent', () => {
  let component: CreateReferenceAnalysisFormComponent;
  let fixture: ComponentFixture<CreateReferenceAnalysisFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateReferenceAnalysisFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateReferenceAnalysisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
