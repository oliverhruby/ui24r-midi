import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";
import { Profile } from "../../models/profile.model";
import { AppState } from "../../app.state";
import { Device } from "../../models/device.model";
import * as ProfileActions from "../../actions/profile.actions";
import * as ConnectionReducer from "../../reducers/connection.reducer";
import * as ProfileReducer from "../../reducers/profile.reducer";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
  selectedValue: Profile;
  profileState$: Observable<ProfileReducer.ProfilesState>;
  profiles$: Observable<Profile[]>;
  inputDevices$: Observable<Device[]>;
  connection: ConnectionReducer.ConnectionState;

  constructor(private store: Store<AppState>) {
    this.profileState$ = this.store.select("profiles");
    this.profiles$ = this.profileState$.pipe(select(ProfileReducer.selectAll));
    this.inputDevices$ = this.store.select("devices");

    this.store.select("connection").subscribe(x => (this.connection = x));
  }

  ngOnInit() {}

  onChange(e) {
    this.store.dispatch(new ProfileActions.SelectProfile(this.selectedValue));
  }

  onChangeUrl(e) {}

  editProfile() {
    this.store.dispatch(new ProfileActions.EditProfile(this.selectedValue));
  }
}
