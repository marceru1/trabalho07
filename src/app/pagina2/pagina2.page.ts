import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Router} from '@angular/router'
import {  IonCardContent,IonCard, IonCardHeader,IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonTabButton, IonInput, IonLabel, IonText, IonItem, IonTextarea, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
  standalone: true,
  imports: [IonCard, IonCardContent,IonCardHeader,IonCardTitle, IonTextarea, IonItem, IonText, IonLabel, IonInput, IonTabButton, IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class Pagina2Page implements OnInit {

  constructor(public route : Router) { }

  navegar() {
    this.route.navigate(['pagina3']);
  }

  ngOnInit() {
  }

}
