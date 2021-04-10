import { Component } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import data  from  './products';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-work';
  temp_data:any;
  filtered:any=[];
  closeResult = '';
  cart:any = [];
  category_unique:any;
  public products:any;
  constructor(private modalService: NgbModal){
    this.products = data;

  }

   

  ngOnInit(){
    // console.log(data);
    this.filtered = this.products;
  }

  category_choose(category:any){
    console.log(category);
    if(category == 'All'){
      this.filtered = this.products;
    }else{
      this.filtered = this.products.filter(function(prod:any){
          return prod.p_category?.indexOf(category) !== -1
        }
      );
    }
  }

  openXl(content:any,data:any) {
    this.temp_data = data;
    this.modalService.open(content);
  }

  addtocart(data:any){
    this.cart.push(data);

    var index = this.cart.findIndex(function(o:any){
      return o.id === data.p_id;
    })
    if (index !== -1) this.cart.splice(index, 1);

    console.log(this.cart);
  }
}
