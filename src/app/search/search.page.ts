import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { IonSearchbar } from '@ionic/angular';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  @ViewChild('search', { static: false }) search: IonSearchbar;



  public list: Array<Object> = [];
  private searchedItem: any;
  public currencyKey: any;
  public currencySymbol: any;
  public value: any;

  constructor(private router: Router, route: ActivatedRoute) {
    this.value = route.snapshot.params.id;
    console.log(this.value);
    this.list = [
      { title: "Australian dollar", currency: "dollar", key: "AUD", symbol: "$" },
      { title: "Bulgarian lev", currency: "lev", key: "BGN", symbol: "лв" },
      { title: "Brazilian real", currency: "real", key: "BRL", symbol: "R$" },
      { title: "Canadian dollar", currency: "dollar", key: "CAD", symbol: "$" },
      { title: "Swiss franc", currency: "franc", key: "CHF", symbol: "CHF" },
      { title: "Chinese yuan renminbi", currency: "yuan", key: "CNY", symbol: "¥" },
      { title: "Czech koruna", currency: "koruna", key: "CZK", symbol: "Kč" },
      { title: "Danish krone", currency: "krone", key: "DKK", symbol: "kr" },
      { title: "Pound sterling", currency: "sterling", key: "GBP", symbol: "£" },
      { title: "Hong Kong dollar", currency: "dollar", key: "HKD", symbol: "$" },
      { title: "Croatian kuna", currency: "kuna", key: "HRK", symbol: "kn" },
      { title: "Hungarian forint", currency: "forint", key: "HUF", symbol: "Ft" },
      { title: "Indonesian rupiah", currency: "rupiah", key: "IDR", symbol: "Rp" },
      { title: "Israeli shekel", currency: "shekel", key: "ILS", symbol: "₪" },
      { title: "Indian rupee", currency: "rupee", key: "INR", symbol: "₹" },
      { title: "Icelandic krona", currency: "krona", key: "ISK", symbol: "kr" },
      { title: "Japanese yen", currency: "yen", key: "JPY", symbol: "¥" },
      { title: "South Korean won", currency: "won", key: "KRW", symbol: "₩" },
      { title: "Mexican peso", currency: "peso", key: "MXN", symbol: "$" },
      { title: "Malaysian ringgit", currency: "ringgit", key: "MYR", symbol: "RM" },
      { title: "Norwagian krone", currency: "krone", key: "NOK", symbol: "kr" },
      { title: "New Zealand dollar", currency: "dollar", key: "NZD", symbol: "$" },
      { title: "Philippine peso", currency: "peso", key: "PHP", symbol: "₱" },
      { title: "Polish zloty", currency: "zloty", key: "PLN", symbol: "zł" },
      { title: "Romanian leu", currency: "leu", key: "RON", symbol: "lei" },
      { title: "Russian rouble", currency: "rouble", key: "RUB", symbol: "₽" },
      { title: "Swedish krona", currency: "krona", key: "SEK", symbol: "kr" },
      { title: "Singapore dollar", currency: "dollar", key: "SGD", symbol: "$" },
      { title: "Thai baht", currency: "baht", key: "THB", symbol: " " },
      { title: "Turkish lira", currency: "lira", key: "TRY", symbol: "₺" },
      { title: "US dollar", currency: "dollar", key: "USD", symbol: "$" },
      { title: "South African rand", currency: "rand", key: "ZAR", symbol: "R" }
    ];
    this.searchedItem = this.list
  }
  converterPage() {
    this.router.navigate(['tabs/tab1']);
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.search.setFocus();
    });
  }

  _ionChange(event) {
    const val = event.target.value;


    this.searchedItem = this.list;
    if (val && val.trim() != '') {
      this.searchedItem = this.searchedItem.filter((item: any) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    // this.search.getInputElement().then(item => console.log(item))


  }

  mouseClick(item) {
    if (this.value == 0) {
      
      this.router.navigate(['tabs/tab1/0', item]);
    }

    if (this.value == 1) {
      
      this.router.navigate(['tabs/tab1/1', item]);
    }
  }


}
