import {Component, OnInit} from '@angular/core';
import {AppareilService} from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuth = false;
  appareils: any[];
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setInterval(
      () => {
        resolve(date);
      }, 2000
    );
  });


  constructor(private  appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 400
    );
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  onAllumer() {
    console.log('on allume tout !');
  }
}
