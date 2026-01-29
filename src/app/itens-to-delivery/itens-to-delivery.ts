import { Component, Input} from '@angular/core';
import { ItemDelivery } from './item-delivery';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-itens-to-delivery',
  imports: [FormsModule],
  templateUrl: './itens-to-delivery.html',
  styleUrl: './itens-to-delivery.css',
})

export class ItensToDelivery {
  @Input()season:String="";
  valorInicial:string="";
  harvests:ItemDelivery[]=[];
  
  seasonUpdate():void{
    console.log(this.valorInicial);
  }
}
