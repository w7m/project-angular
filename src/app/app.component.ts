import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppareilService} from './services/appareil.service';
import {Observable, interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  appareils: any[];
  secondes: number;
  counterSubscription: Subscription;

  constructor(private  appareilService: AppareilService) {
  }

  ngOnInit() {
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      (value: number ) => {
        this.secondes = value;
      }
    );
  }
  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }

}
