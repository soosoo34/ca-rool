import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Reference} from 'src/app/analyse-context/entities/reference.interface';


@Injectable({
  providedIn: 'root'
})
export class ReferenceHttpService {

  ServerUrl = 'http://localhost:4200/api';

  constructor(private http: HttpClient) {
  }

  public getReference() {
    return this.http.get(`${this.ServerUrl}/reference`);
  }

  public getReferenceById(id: Reference) {
    return this.http.get(`${this.ServerUrl}/reference/${id}`);
  }

  public createReference(reference: Reference) {
    return this.http.post(`${this.ServerUrl}/reference`, reference);
  }

  public updateReference(reference: Reference) {
    return this.http.put(`${this.ServerUrl}/reference`, reference);
  }

  public deleteReference(id: number) {
    return this.http.delete(`${this.ServerUrl}/reference/${id}`);
  }

}


