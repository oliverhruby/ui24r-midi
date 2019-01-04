import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges
} from "@angular/core";
import { AppState } from "./../../app.state";
import { Store } from "@ngrx/store";
import { FormGroup, FormBuilder } from "@angular/forms";
import * as ProfileActions from "../../actions/profile.actions";
import { Profile } from "../../models/profile.model";
import { Update } from "@ngrx/entity";
import { UUID } from "angular2-uuid";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnChanges, OnInit {
  myForm: FormGroup;

  @Input()
  profile: Profile;

  constructor(private store: Store<AppState>, private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      Name: "",
      Description: "",
      Target: ""
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
    this.store.dispatch(new ProfileActions.UpdateProfile({ profile }));
  }

  delete() {
    this.store.dispatch(
      new ProfileActions.DeleteProfile({ id: this.profile.Id })
    );
  }

  add() {
    this.store.dispatch(new ProfileActions.AddProfile(this.profile));
  }

  copy() {
    this.store.dispatch(new ProfileActions.AddProfile(this.profile));
  }

  addCommand() {}

  addRule() {
    this.store.dispatch(
      new ProfileActions.AddProfileRule({
        id: this.profile.Id,
        rule: {
          Id: UUID.UUID(),
          Name: "",
          Control: null,
          Active: true,
          StopProcessing: false
        }
      })
    );
  }

  deleteRule(id: string) {
    this.store.dispatch(
      new ProfileActions.DeleteProfileRule({
        id: this.profile.Id,
        ruleId: id
      })
    );
  }
}
