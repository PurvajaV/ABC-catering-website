import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../interface';
import { SVGIcon, editToolsIcon, trashIcon } from '@progress/kendo-svg-icons';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent {
  productList: product[] = [];
  productMessage: undefined | string;
  public editToolsIcon: SVGIcon = editToolsIcon;
  public trashIcon: SVGIcon = trashIcon;
  icon = faTrash;
  iconEdit=faEdit;
  constructor(private product: ProductService) {}

  ngOnInit(): void {
    this.list();
  }

  deleteProduct(id: number) {
    this.product.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productMessage = 'Product is deleted';

        this.list();
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
  }

  list() {
    this.product.productList().subscribe((result) => {
      if (result) {
        this.productList = result;
      }
    });
  }
}
