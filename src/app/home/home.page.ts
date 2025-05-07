import { Component } from '@angular/core';
import {  IonCardContent,IonCard, IonCardHeader,IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonTabButton, IonInput, IonLabel, IonText, IonItem, IonTextarea, IonCardTitle } from '@ionic/angular/standalone';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonCard, IonCardContent,IonCardHeader,IonCardTitle, IonTextarea, IonItem, IonText, IonLabel, IonInput, IonTabButton, IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor( public route : Router) {}

  navegar() {
    this.route.navigate(['pagina2']);
  }

}


