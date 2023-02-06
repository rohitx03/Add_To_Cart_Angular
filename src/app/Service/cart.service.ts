import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItem : any = [];
  public productItem = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  // Get The Product 
  getProduct(){
    return  this.productItem.asObservable();
  }
  // Set the Product
  setProduct(product : any){
    this.cartItem.push(...product);
    this.productItem.next(product);
  }
  // Add to Cart Action 
  addProduct(product : any){
    this.cartItem.push(product);
    this.productItem.next(this.cartItem);
    this.getTotalPrice();
    console.log(this.cartItem)
  }
  // Grand Total
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItem.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  // Remove Only One Item
  removeCartItem(product: any){
    this.cartItem.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.cartItem.splice(index,1)
      }
    })
    this.productItem.next(this.cartItem)
  }
  // Remove All the Cart Item
  removeAllCartItem(){
    this.cartItem = [];
    this.productItem.next(this.cartItem)
  }
}
