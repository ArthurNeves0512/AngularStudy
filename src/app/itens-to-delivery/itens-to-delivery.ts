import { Component, inject, Input} from '@angular/core';
import { ItemDelivery } from './item-delivery';
import { FormsModule } from '@angular/forms';
import { Item } from '../services/item';

@Component({
  selector: 'app-itens-to-delivery',
  imports: [FormsModule],
  templateUrl: './itens-to-delivery.html',
  styleUrl: './itens-to-delivery.css',
})

export class ItensToDelivery {

  private item_service = inject(Item);
  @Input()season:String="";
  valorInicial:string="";
  crops:ItemDelivery[]=[];
  
  seasonUpdate():void{
    console.log(this.valorInicial);
    this.crops=this.item_service.getItens(this.valorInicial);
  }
}
