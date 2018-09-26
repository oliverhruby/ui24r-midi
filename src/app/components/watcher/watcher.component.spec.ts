import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatcherComponent } from './watcher.component';
import { TranslateModule } from '@ngx-translate/core';
import { ControllerService } from '../../services/controller.service';
import { MidiService } from '../../services/midi.service';
import { HttpClientModule } from '@angular/common/http';
import { HexPipe } from '../../pipes/hex.pipe';

describe('WatcherComponent', () => {
  let component: WatcherComponent;
  let fixture: ComponentFixture<WatcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HexPipe,
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
