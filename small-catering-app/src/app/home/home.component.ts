import { Component, OnInit } from '@angular/core';
import { product } from '../interface';
import { ProductService } from '../services/product.service';
import { faL } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public firstTileContent = `Reactive Netscape cherry pick domain contribution lazy Edge program.
  Quick sort modern bundle incognito Cloudfront views CLI Safari UX.`;
public secondTileContent = `Lazy reflog freelancer Dijkstra directed acyclic graph concurrent uglify concurrency Safari.
  Interface MacBook coding idiosyncratic contexts package manager yarn hashtable concurrent homebrew.`;
public thirdTileContent = `Senior-engineer Edge backend UI subclass tech debt duck typing merge sort lazy.
  Asynchronous dependency injection engineer tree shaking lang architecture Linux infrastructure queue off-by-one error.`;
public fourthTileContent = `Infrastructure tl;dr spy data store remote procedure call bootcamp pairing child keycaps.
  Grep kernel contribute UI casting composition over inheritance remote minification void.`;



  availableProducts:undefined | product[];
  public menuType: boolean = false;
   constructor(private product:ProductService) {}
 
   ngOnInit(): void {
    
    console.log(localStorage.getItem('user'));
    if(localStorage.getItem('user')){
      this.menuType = true;
    }
    
     this.product.availableProducts().subscribe((data)=>{
       this.availableProducts=data;
     })
   }
}
