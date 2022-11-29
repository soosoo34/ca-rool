import {Component} from '@angular/core';
import {WearHttpService} from 'src/app/analyse-context/services/wear/wear-http.service';
import {FormBuilder, Validators} from '@angular/forms';
import {RateEnum} from 'src/app/analyse-context/entities/wear.interface';

@Component({
  selector: 'app-create-wear-analysis-form',
  templateUrl: './create-analysis-form.component.html',
  styleUrls: ['./create-analysis-form.component.scss']
})
export class CreateWearAnalysisFormComponent {

  submited = false;

  wearForm = this.fb.group({
    id: ['', Validators.required],
    vehicle: ['', Validators.required],
    picture: ['', Validators.required],
    rate: [RateEnum.A, Validators.required],
  });
  rates: RateEnum[] = [RateEnum.A, RateEnum.B, RateEnum.C, RateEnum.D];

  constructor(private wearHttpService: WearHttpService, private fb: FormBuilder) {
  }

  createWear() {
    if (this.wearForm.valid) {
      const wear = {
        id: this.wearForm.value.id as unknown as number,
        vehicle: this.wearForm.value.vehicle as string,
        picture: this.wearForm.value.picture as string,
        rate: this.wearForm.value.rate as RateEnum,
      }
      this.wearHttpService.createWear(wear).subscribe((createWearHttpResponse: any) => {
        if (createWearHttpResponse) {
          this.wearForm.reset();
          this.submited = true;
          alert('Wear created');
        }
      });
    }
  }
}
