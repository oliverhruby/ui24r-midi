import { Component, OnInit, Input } from '@angular/core';
import { AppState } from './../../app.state';
import { Store } from '@ngrx/store' ;
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input()
  profile: any;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
  }

}
