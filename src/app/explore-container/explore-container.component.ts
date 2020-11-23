import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() key: string;
  @Input() name: string;
  @Input() symbol: string;
  @Input() value: any;


  constructor(private router:Router) { }

  ngOnInit() {
    
  }

  
  searchCurrency() {
    if(this.value == 0) {
    this.router.navigate(['search/0']);
    }
    if(this.value == 1) {
      this.router.navigate(['search/1']);
      }
  }
  
}
