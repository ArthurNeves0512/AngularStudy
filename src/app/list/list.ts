import { Component } from '@angular/core';
interface Item{
  name:string,
  quantity:number,
  quality:string
}
@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
  itensList:Array<Item>=[
    {name:"aaaa",quantity:30,quality:"3"},
    {name:"aaaa",quantity:30,quality:"3"},
    {name:"aaaa",quantity:30,quality:"3"},
    {name:"aaaa",quantity:30,quality:"3"},
    {name:"aaaa",quantity:30,quality:"3"},
    {name:"aaaa",quantity:30,quality:"3"},
  ]
}
