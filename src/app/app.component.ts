import { Component } from '@angular/core';
import { Prodotto } from "./types/IProdotto";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sc-01';
  listaProdotti: Array<Prodotto> = [];

  constructor() {
    this.caricaDati();
  }

caricaDati(): void {
  fetch("assets/data/prodotti.json")
    .then(risposta => risposta.json())
    .then((data: Array<Prodotto>) => {
      data.forEach(prodotto => {
        this.listaProdotti.push(prodotto);
        console.log(prodotto);
      });
    })
    .catch(err => console.error(`Errore cariamento dati: ${err}`))
}

}
