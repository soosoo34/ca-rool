import {Component} from '@angular/core';
import {Analyse} from 'src/app/analyse-context/entities/analyse';
import {Reference} from 'src/app/analyse-context/entities/reference.interface';
import {ReferenceHttpService} from 'src/app/analyse-context/services/reference/reference-http.service';

@Component({
  selector: 'app-reference-analysis',
  templateUrl: './reference-analysis.component.html',
  styleUrls: ['./reference-analysis.component.scss']
})
export class ReferenceAnalysisComponent {
  references: Reference[] = [];

  constructor(private referenceHttpsService: ReferenceHttpService) {
  }
  ngOnInit(): void {
    this.getReferences();
  }

  private getReferences() {
    this.referenceHttpsService.getReference().subscribe((referenceHttpResponse: any) => {
      this.references = referenceHttpResponse;
    });
  }

  deleteReference(id: number) {
    this.referenceHttpsService.deleteReference(id).subscribe((referenceHttpResponse: any) => {
      this.getReferences();
    });
  }
}
