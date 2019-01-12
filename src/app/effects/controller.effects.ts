import * as MessageActions from "../actions/message.actions";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import { ControllerService } from "../services/controller.service";

@Injectable()
export class ControllerEffects {

  constructor(
    private actions$: Actions,
    private controllerService: ControllerService
  ) {}

  /**
   * Listen to incoming MIDI messages and trigger the processing
   * of the controller rules for the selected profile
   */
  @Effect({ dispatch: false })
  firstAction$ = this.actions$.pipe(
    ofType<MessageActions.Add>(MessageActions.ADD_MESSAGE),
    tap(data => this.controllerService.translate(data.payload))
  );

}
