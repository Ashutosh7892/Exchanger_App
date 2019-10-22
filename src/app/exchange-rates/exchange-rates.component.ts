import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.scss']
})
export class ExchangeRatesComponent implements OnInit {
  protected exchangeRatesData = {};
  protected objectKeys:any;
  protected currencyValue = "$00"
  constructor(private apiService: ApiService) { }

  ngOnInit() {   
	  this.fetchExchangeRates("USD");
  }

  /**
   * Fucntion to refresh eschange rates
   */
   protected refreshExchangeRates=()=>{
    this.fetchExchangeRates("USD");    
   }

   /**
    * Function to call getExchangeRates api
    */
   protected fetchExchangeRates=(selectedCurrency)=> {
    this.apiService.getExcangerates(selectedCurrency).subscribe((data)=>{
     this.objectKeys = Object.keys;
      this.exchangeRatesData =  data;
      console.log(data);
	  
    },(error)=>{
      // Error handling code goes here!
    });
   }
}
