import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Router} from '@angular/router'
import {  IonCardContent,IonCard, IonCardHeader,IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonTabButton, IonInput, IonLabel, IonText, IonItem, IonTextarea, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule,IonCard, IonCardContent,IonCardHeader,IonCardTitle, IonTextarea, IonItem, IonText, IonLabel, IonInput, IonTabButton, IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class Pagina3Page implements OnInit {

  navegar() {
    this.route.navigate(['home']);
  }

  constructor(public route : Router) { }

  produtos = [
    { nome: 'Notebook', valor: 3500, categoria: 'Informática' },
    { nome: 'Cafeteira', valor: 200, categoria: 'Eletrodoméstico' },
    { nome: 'Camiseta', valor: 50, categoria: 'Vestuário' },
  ];

  ngOnInit() {
    console.log(this.produtos);
  }

}
