
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  sendFormData(data){
    return this.http.post(`https://pklrlsysn1.execute-api.eu-west-1.amazonaws.com/prod/email/send`, data);
  }
}
