import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { AppState } from './../../app.state';
import { Store } from '@ngrx/store' ;
import { FormGroup, FormBuilder } from '@angular/forms';
import * as ProfileActions from '../../actions/profile.actions';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnChanges, OnInit {

  myForm: FormGroup;

  @Input()
  profile: Profile;

  constructor(private store: Store<AppState>, private fb: FormBuilder) {

  }

  ngOnInit() {
    this.myForm = this.fb.group({
      Name: '',
      Description: '',
      Target: ''
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.profile && !changes.profile.firstChange) {
      this.myForm.patchValue({
        Name: this.profile.Name,
        Description: this.profile.Description,
        Target: this.profile.Target
      });
    }
  }

  delete() {
    this.store.dispatch(new ProfileActions.Delete(this.profile.Id));
  }

  copy() {
    this.store.dispatch(new ProfileActions.Add(this.profile));
  }

}
