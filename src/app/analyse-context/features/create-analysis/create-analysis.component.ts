import {Component} from '@angular/core';
import {AnalysisType} from 'src/app/analyse-context/entities/analyse-type';

@Component({
  selector: 'app-create-analysis',
  templateUrl: './create-analysis.component.html',
  styleUrls: ['./create-analysis.component.scss']
})
export class CreateAnalysisComponent {
  analysisType: AnalysisType = 'wear';

  constructor() {
  }

}
