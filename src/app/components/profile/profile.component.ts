import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { AppState } from './../../app.state';
import { Store } from '@ngrx/store' ;
import { FormGroup, FormBuilder } from '@angular/forms';
import * as ProfileActions from '../../actions/profile.actions';
import { Profile } from '../../models/profile.model';
import { Update } from '@ngrx/entity';

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

  save() {
    const changes = this.myForm.value;
    const profile: Update<Profile> = {
      id: this.profile.Id,
      changes
    };
    this.store.dispatch(new ProfileActions.UpdateProfile({profile}));
  }

  delete() {
    this.store.dispatch(new ProfileActions.DeleteProfile({ id: this.profile.Id }));
  }

  add() {
    this.store.dispatch(new ProfileActions.AddProfile(this.profile));
  }

  copy() {
    this.store.dispatch(new ProfileActions.AddProfile(this.profile));
  }

  addCommand() {

  }

  addEvent() {
    this.store.dispatch(new ProfileActions.AddProfileEvent({id: this.profile.Id, event: null}));
  }

  deleteEvent(id: number) {
    this.store.dispatch(new ProfileActions.DeleteProfileEvent({id: this.profile.Id, eventId: id}));
  }

}
