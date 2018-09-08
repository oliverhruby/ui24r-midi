import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watcher',
  templateUrl: './watcher.component.html',
  styleUrls: ['./watcher.component.scss']
})
export class WatcherComponent implements OnInit {

  log: string;

  constructor() { }

  ngOnInit() {
    this.log = "1,241,3...no match\n1,244,4...Set Channel 1 Volume 4\n1,241,1...no match\n1,244,2...Set Channel 1 Volume 2";
  }

}
