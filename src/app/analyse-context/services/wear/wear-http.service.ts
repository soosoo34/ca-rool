import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Wear} from 'src/app/analyse-context/entities/wear.interface';


@Injectable({
  providedIn: 'root'
})
export class WearHttpService {

  ServerUrl = 'http://localhost:4200/api';

  constructor(private http: HttpClient) {
  }

  public getWear() {
    return this.http.get(`${this.ServerUrl}/wear`);
  }

  public getWearById(id: Wear) {
    return this.http.get(`${this.ServerUrl}/wear/${id}`);
  }

  public createWear(wear: Wear) {
    return this.http.post(`${this.ServerUrl}/wear`, wear);
  }

  public updateWear(wear: Wear) {
    return this.http.put(`${this.ServerUrl}/wear`, wear);
  }

  public deleteWear(id: number) {
    return this.http.delete(`${this.ServerUrl}/wear/${id}`);
  }
}


