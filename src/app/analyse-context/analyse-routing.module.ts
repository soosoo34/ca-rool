import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WearAnalysisComponent} from 'src/app/analyse-context/features/wear-analysis/wear-analysis.component';
import {CreateAnalysisComponent} from 'src/app/analyse-context/features/create-analysis/create-analysis.component';
import {ReferenceAnalysisComponent} from 'src/app/analyse-context/features/reference-analysis/reference-analysis.component';

const routes: Routes = [
  {
    path: 'wear',
    component: WearAnalysisComponent
  },

  {
    path: 'reference',
    component: ReferenceAnalysisComponent
  },
  {
    path: 'create-analysis',
    component: CreateAnalysisComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalyseRoutingModule {
}
