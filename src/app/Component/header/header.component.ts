import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{
  public totalItem : number = 0;
  public searchTerm : string ='';
  constructor(private cartServie : CartService){}

  ngOnInit(): void { 
    // header cart Number
    this.cartServie.getProduct( )
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value ;
    console.log(this.searchTerm)
    this.cartServie.search.next(this.searchTerm)
  }
}