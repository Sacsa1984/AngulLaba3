import { Component, OnInit } from '@angular/core';
import{StranDel} from './MyClass';
import { ITEMS } from './MyClassInecial';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls:['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  MyItems=ITEMS;



  constructor() { }

  ngOnInit(): void {
  }

}
