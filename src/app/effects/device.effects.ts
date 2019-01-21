import * as DeviceActions from "../actions/device.actions";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import { MidiService } from "../services/midi.service";

@Injectable()
export class DeviceEffects {

  constructor(
    private actions$: Actions,
    private midiService: MidiService
  ) {}

  /**
   * When connecting to a device we need to subscribe to the Web MIDI events
   */
  @Effect({ dispatch: false })
  deviceConnecting$ = this.actions$.pipe(
    ofType<DeviceActions.Connect>(DeviceActions.CONNECT),
    tap(data => this.midiService.ConnectDevice(data.deviceName))
  );

}
