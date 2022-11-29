import {Component} from '@angular/core';
import {ReferenceHttpService} from 'src/app/analyse-context/services/reference/reference-http.service';
import {FormBuilder, Validators} from '@angular/forms';
import {RateEnum} from 'src/app/analyse-context/entities/wear.interface';
import {WearHttpService} from 'src/app/analyse-context/services/wear/wear-http.service';

@Component({
  selector: 'app-create-reference-analysis-form',
  templateUrl: './create-reference-analysis-form.component.html',
  styleUrls: ['./create-reference-analysis-form.component.scss']
})
export class CreateReferenceAnalysisFormComponent {
  submited = false;

  referenceForm = this.fb.group({
    id: ['', Validators.required],
    vehicle: ['', Validators.required],
    picture: ['', Validators.required],
    reference: ['', Validators.required],
  });

  constructor(private referenceHttpService: ReferenceHttpService, private fb: FormBuilder) {
  }

  createReference() {
    if (this.referenceForm.valid) {
      const references = {
        id: this.referenceForm.value.id as unknown as number,
        vehicle: this.referenceForm.value.vehicle as string,
        picture: this.referenceForm.value.picture as string,
        dimension: this.referenceForm.value.reference as string,
      }
      this.referenceHttpService.createReference(references).subscribe((createReferenceHttpResponse: any) => {
        if (createReferenceHttpResponse) {
          this.referenceForm.reset();
          this.submited = true;
          alert('Reference created');
        }
      });
    }
  }
}
