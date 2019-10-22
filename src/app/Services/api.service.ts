import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //public getExchangeRatesUrl = 'https://api.exchangeratesapi.io/latest?base=IND';
  constructor(public httpClient:HttpClient) {
  
  }
  /**
   * Api call to get exchange rates
   */
  public getExcangerates(data){
    return this.httpClient.get(environment.baseUrl+'latest'+'?base='+data);
  }
}
