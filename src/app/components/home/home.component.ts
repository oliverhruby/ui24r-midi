import { Component, OnInit } from "@angular/core";
import { AppState } from "./../../app.state";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}
}
