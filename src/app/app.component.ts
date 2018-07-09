import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    firebase.initializeApp( {
        apiKey: 'AIzaSyAGLhL8o9fp27qcEFH1coc7EgECh8fhEGc',
        authDomain: 'tinder-dance.firebaseapp.com',
        databaseURL: 'https://tinder-dance.firebaseio.com',
        projectId: 'tinder-dance',
        storageBucket: 'tinder-dance.appspot.com',
        messagingSenderId: '33201991758'
      });
    }
  }

