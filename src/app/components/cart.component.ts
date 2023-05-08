import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

      @Input()
      fruitname: string = '';

      //Attribute
      // @Input()
      // fruitnames: string[] = [];

      //Attribute
      @Input()
      cart: string[] = [];
    //Event
    // @Output()
    // onSelected = new Subject<string>()
  
}
