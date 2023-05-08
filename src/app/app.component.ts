import { Component } from '@angular/core';
import { CartItem } from './components/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingcart';

  cart: string[]=[''];

  // const FRUITS: string[] = [
  //   'acorn_squash', 'apple', 'bell_pepper', 'blueberries', 'broccoli',
  //   'carrot', 'celery', 'chili_pepper', 'corn', 'eggplant', 'harold',
  //   'lettuce', 'mushroom', 'onion', 'potato', 'pumpkin', 'radish', 'squash',
  //   'strawberry', 'sugar_snap', 'tomato', 'zucchini' ]

  FRUITS: string[] = [
    'acorn_squash', 'apple', 'bell_pepper', 'blueberries', 'broccoli',
    'carrot', 'celery', 'chili_pepper', 'corn', 'eggplant', 'harold',
    'lettuce', 'mushroom', 'onion', 'potato', 'pumpkin', 'radish', 'squash',
    'strawberry', 'sugar_snap', 'tomato', 'zucchini' ]

  
    fruitSelected(fruit: string){
      console.info('>>>>> The fruit is ' + fruit );
      this.cart.push(fruit);
    }

}
