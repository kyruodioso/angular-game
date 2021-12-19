import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dados';

  dadoIzquierdo="../assets/img/dice1.png";
  dadoDerecho="../assets/img/dice3.png";
  numero1=2;
  numero2=1;

  tirarDados():void{
    this.numero1=Math.round(Math.random() * 5) + 1;
    this.numero2=Math.round(Math.random() * 5) + 1;
    this.dadoDerecho= `../assets/img/dice${this.numero1}.png`
    this.dadoIzquierdo= `../assets/img/dice${this.numero2}.png`
  }
}
