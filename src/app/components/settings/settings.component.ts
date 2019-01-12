import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";
import { Profile } from "../../models/profile.model";
import { AppState } from "../../app.state";
import { Device } from "../../models/device.model";
import * as DeviceActions from "../../actions/device.actions";
import * as ProfileActions from "../../actions/profile.actions";
import * as ConnectionReducer from "../../reducers/connection.reducer";
import * as ProfileReducer from "../../reducers/profile.reducer";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
  selectedProfile: Profile;
  profileState$: Observable<ProfileReducer.ProfilesState>;
  profiles$: Observable<Profile[]>;
  inputDevices$: Observable<Device[]>;
  connection: ConnectionReducer.ConnectionState;

  constructor(
    private store: Store<AppState>,
    private http: HttpClient) {
    this.profileState$ = this.store.select("profiles");
    this.profiles$ = this.profileState$.pipe(select(ProfileReducer.selectAll));
    this.inputDevices$ = this.store.select("devices");
    this.store.select("connection").subscribe(x => (this.connection = x));

    this.getProfiles();
  }

  getProfiles() {
    this.http.get("./assets/profiles.json")
      .subscribe(data => {
        this.store.dispatch(new ProfileActions.LoadProfiles(data));
        // TODO: fix this hack
        this.profileState$ = this.store.select("profiles");
        this.profiles$ = this.profileState$.pipe(select(ProfileReducer.selectAll));
      });
  }

  ngOnInit() {}

  onChange(e) {
    this.store.dispatch(new ProfileActions.SelectProfile(e.selectedProfile));
  }

  connect(deviceName: string) {
    this.store.dispatch(new DeviceActions.Connect(deviceName));
  }

  editProfile() {
    this.store.dispatch(new ProfileActions.EditProfile(this.selectedProfile));
  }
}
