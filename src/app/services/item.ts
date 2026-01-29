import { Injectable } from '@angular/core';
import { ItemDelivery } from '../itens-to-delivery/item-delivery';

@Injectable({
  providedIn: 'root',
})
export class Item {
  itemsSummer:ItemDelivery[]=[
    {_nome:"Melon",_quantity:10,_quality:"gold"},
    {_nome:"Sunflower",_quantity:10,_quality:"gold"},
    {_nome:"Corn",_quantity:10,_quality:"gold"},
    {_nome:"Coffee Bean",_quantity:10,_quality:"gold"},
    {_nome:"Hot Pepper",_quantity:10,_quality:"gold"},
    {_nome:"Tomato",_quantity:10,_quality:"gold"}
  ];
  itemsSpring:ItemDelivery[]=[
    {_nome:"Carrot",_quantity:10,_quality:"gold"},
    {_nome:"Strawberry",_quantity:10,_quality:"gold"},
    {_nome:"Green Bean",_quantity:10,_quality:"gold"},
    {_nome:"Coffee Bean",_quantity:10,_quality:"gold"},
    {_nome:"Potato",_quantity:10,_quality:"gold"},
    {_nome:"Parsnip",_quantity:10,_quality:"gold"}
  ];
  itemsFall:ItemDelivery[]=[
    {_nome:"Pumpkin",_quantity:10,_quality:"gold"},
    {_nome:"Corn",_quantity:10,_quality:"gold"},
    {_nome:"Cranberries",_quantity:10,_quality:"gold"},
    {_nome:"Eggplant",_quantity:10,_quality:"gold"},
    {_nome:"Broccoli",_quantity:10,_quality:"gold"},
    {_nome:"Grape",_quantity:10,_quality:"gold"}
  ];
  itemsWinter:ItemDelivery[]=[
    {_nome:"Powdermelon",_quantity:10,_quality:"gold"}
  ]

  getItens(season:string):ItemDelivery[]{
    switch(season){
      case("winter"):
        return this.itemsWinter;
      case("spring"):
        return this.itemsSpring;
      case("summer"):
        return this.itemsSummer;
      case("fall"):
        return this.itemsFall;
      default:
        return [];
    }
  }
}
