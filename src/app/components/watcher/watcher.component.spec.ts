import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatcherComponent } from './watcher.component';
import { TranslateModule } from '@ngx-translate/core';
import { ControllerService } from '../../providers/controller.service';
import { MidiService } from '../../providers/midi.service';
import { HttpClientModule } from '@angular/common/http';

describe('WatcherComponent', () => {
  let component: WatcherComponent;
  let fixture: ComponentFixture<WatcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WatcherComponent
      ],
      providers: [
        MidiService,
        ControllerService
      ],
      imports: [
        HttpClientModule,
        TranslateModule.forRoot()
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
