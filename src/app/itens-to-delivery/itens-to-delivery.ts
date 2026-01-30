import { Component, inject, Input} from '@angular/core';
import { ItemDelivery } from './item-delivery';
import { FormsModule } from '@angular/forms';
import { Item } from '../services/item';
import { JsonPlaceholder } from '../services/json-placeholder';

@Component({
  selector: 'app-itens-to-delivery',
  imports: [FormsModule],
  templateUrl: './itens-to-delivery.html',
  styleUrl: './itens-to-delivery.css',
})

export class ItensToDelivery {

  private readonly _item_service = inject(Item);
  private readonly _json_placegolder_service = inject(JsonPlaceholder);
  @Input()season:String="";
  valorInicial:string="";
  crops:ItemDelivery[]=[];
  
  seasonUpdate():void{
    console.log(this.valorInicial);
    this.crops=this._item_service.getItens(this.valorInicial);
  }
  makeHttpRequest(){
    return this._json_placegolder_service.getPosts();
  }
}
