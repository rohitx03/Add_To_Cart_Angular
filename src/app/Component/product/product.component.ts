import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productList :any;
  public filterCategory : any;
  public searchKey:string = ''
  constructor(private api: ApiService, private cartServie : CartService){}
  // Difference between Public and Private 

  ngOnInit(): void {
    // For for Printing Data thought API
    this.api.getProduct()
    .subscribe(res=>{
      this.filterCategory = res;
      // use for Product List
      this.productList = res;  
      // end ApI

      // Used for Print the Data again and again
      this.productList.forEach((a:any)=>{
        if(a.category === "men's clothing" || a.category === "women's clothing"){
          a.category = "fashion"
        }
        Object.assign(a,{quantity:1, total:a.price})
      });
      console.log(this.productList)
    })

    // Search Using Header Input Box 
    this.cartServie.search.subscribe((val:any )=>{
      this.searchKey = val;
    })
  }
  
  // Add Data to cart
  addToCart(item : any){
    this.cartServie.addProduct(item)
  }

  // Filer of Second Menu Baar
  filter(category : string){
     this.filterCategory = this.productList
     .filter((a:any)=>{
      if(a.category == category || category == ''){
        return a;
      }
     })
  }
}
