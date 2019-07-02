import { Component, OnInit } from '@angular/core';
import { Product } from './product';
declare let alertify:any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title = "Ürün Listesi"
  filterText = ""
  products: Product[] = [
    { id: 1, name: "Laptop", price: 2500, categoryId: 1, description: "Asus Zenbook", imageUrl: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=804&q=80" },
    { id: 2, name: "Klavye", price: 25, categoryId: 2, description: "A4 Tech", imageUrl: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=804&q=80" },
    { id: 3, name: "Mouse", price: 25, categoryId: 2, description: "A4 Tech", imageUrl: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=804&q=80" },
    { id: 4, name: "Telefon", price: 25, categoryId: 2, description: "A4 Tech", imageUrl: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=804&q=80" },
    { id: 5, name: "Buzdolabı", price: 25, categoryId: 2, description: "A4 Tech", imageUrl: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=804&q=80" },
    { id: 6, name: "Notebook", price: 25, categoryId: 2, description: "A4 Tech", imageUrl: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=804&q=80" }
  ]
  ngOnInit() {
  }

  addToCart(product){
    alertify.success(product.name + " added")
  }

}
