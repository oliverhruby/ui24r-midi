import * as ConnectionActions from "../actions/connection.actions";
import { Effect } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { interval } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class ConnectionEffects {
  // @Effect()
  // interval$ = interval(1000).pipe(
  //   map(_ => {
  //     if (Math.random() > 0.5) {
  //       return new ConnectionActions.Connected();
  //     } else {
  //       return new ConnectionActions.Disconnected();
  //     }
  //   })
  // );
}
