import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi Aplicación Angular';
  buyList = [
    {
      name: 'Compra 1',
      date: new Date(),
      price: 1000
    },
    {
      name: 'Compra 2',
      date: new Date(),
      price: 2000
    },
    {
      name: 'Compra 3',
      date: new Date(),
      price: 3000
    },
  ]

}
