import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

 ngOnInit() {
   firebase.initializeApp({
     apiKey: "AIzaSyD6gL6e7AORweKmc5-9_ufONhV_uK0Fs0I",
    authDomain: "ng-my-recipe-book-66f04.firebaseapp.com",
   });
 }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
