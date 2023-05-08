import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {

    //Attribute
    @Input()
    fruitname: string = '';

    quantity: number = 0;

  // const FRUITS: string[] = [
  //   'acorn_squash', 'apple', 'bell_pepper', 'blueberries', 'broccoli',
  //   'carrot', 'celery', 'chili_pepper', 'corn', 'eggplant', 'harold',
  //   'lettuce', 'mushroom', 'onion', 'potato', 'pumpkin', 'radish', 'squash',
  //   'strawberry', 'sugar_snap', 'tomato', 'zucchini' ]

  @Output()
  onSelected = new Subject<string>()


  //Fire item 
  
  pressed(e:any){
    console.info(`fruitname is ${this.fruitname}`);
    this.onSelected.next(this.fruitname);
  }

  inc(i:number){
    // console.info('INC: ', this.fruits(i));
  }

  dec(i:number){

  }
}
