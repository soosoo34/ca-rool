import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InMemoryDataService} from 'src/app/analyse-context/services/in-memory-analyse-db.service';
import {WearAnalysisComponent} from './features/wear-analysis/wear-analysis.component';
import {AnalyseRoutingModule} from 'src/app/analyse-context/analyse-routing.module';
import { CreateAnalysisComponent } from './features/create-analysis/create-analysis.component';
import {
  CreateWearAnalysisFormComponent
} from 'src/app/analyse-context/features/create-wear-analysis-form/create-analysis-form.component';
import {ReferenceAnalysisComponent} from 'src/app/analyse-context/features/reference-analysis/reference-analysis.component';
import { CreateReferenceAnalysisFormComponent } from './features/create-reference-analysis-form/create-reference-analysis-form.component';



@NgModule({
  declarations: [
    WearAnalysisComponent,
    CreateAnalysisComponent,
    CreateWearAnalysisFormComponent,
    ReferenceAnalysisComponent,
    CreateReferenceAnalysisFormComponent,

  ],
  imports: [
    CommonModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AnalyseRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AnalyseModule {
}
