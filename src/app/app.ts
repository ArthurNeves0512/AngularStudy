import { Component, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItensToDelivery } from './itens-to-delivery/itens-to-delivery';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ItensToDelivery],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('studying-angular');
}
