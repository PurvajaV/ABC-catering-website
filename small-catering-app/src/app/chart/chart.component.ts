import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  totalValue: string = ""
  constructor(private product: ProductService) {

  }
  ngOnInit(): void {

  }

  // dailyChart() {
  //   this.product.orderValueForChart().subscribe((result) => {
  //     JSON.stringify(result);
      
  //   })
  // }



}
