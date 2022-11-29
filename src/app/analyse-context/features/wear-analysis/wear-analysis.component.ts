import {Component} from '@angular/core';
import {Wear} from 'src/app/analyse-context/entities/wear.interface';
import {WearHttpService} from 'src/app/analyse-context/services/wear/wear-http.service';

@Component({
  selector: 'app-wear-analysis',
  templateUrl: './wear-analysis.component.html',
  styleUrls: ['./wear-analysis.component.scss']
})
export class WearAnalysisComponent {
  wears: Wear[] = [];

  constructor(private wearHttpService: WearHttpService) {
  }

  ngOnInit(): void {
    this.getWears();
  }


  private getWears() {
    this.wearHttpService.getWear().subscribe((wearHttpResponse: any) => {
      this.wears = wearHttpResponse;
    });
  }

  delete(id: number) {
    this.wearHttpService.deleteWear(id).subscribe((wearHttpResponse: any) => {
      this.getWears();
    });
  }
}
