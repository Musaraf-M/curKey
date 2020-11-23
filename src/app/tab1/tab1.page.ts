import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  currencyKey1: any;
  currencyName1: any;
  currencySymbol1: any;
  currencyKey2: any;
  currencyName2: any;
  currencySymbol2: any;
  constructor(private route: ActivatedRoute, private router: Router) {
    let detail = route.snapshot.params.value;
    console.log(detail); 
    if(detail == 0){
      
       this.currencyName1 = route.snapshot.paramMap.get('currency');
       this.currencyKey1 = route.snapshot.paramMap.get('key');
       this.currencySymbol1 = route.snapshot.paramMap.get('symbol');
    }
    if(detail == 1){
      
      this.currencyName2 = route.snapshot.paramMap.get('currency');
      this.currencyKey2 = route.snapshot.paramMap.get('key');
      this.currencySymbol2 = route.snapshot.paramMap.get('symbol');
   }
  }
}