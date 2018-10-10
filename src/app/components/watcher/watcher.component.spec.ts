import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatcherComponent } from './watcher.component';
import { TranslateModule } from '@ngx-translate/core';
import { ControllerService } from '../../services/controller.service';
import { MidiService } from '../../services/midi.service';
import { HttpClientModule } from '@angular/common/http';
import { BinaryPipe } from '../../pipes/binary.pipe';
import { HexPipe } from '../../pipes/hex.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { reducer as deviceReducer } from '../../reducers/device.reducer';
import { reducer as profileReducer } from '../../reducers/profile.reducer';
import { reducer as messageReducer } from '../../reducers/message.reducer';
import { reducer as commandReducer } from '../../reducers/command.reducer';

describe('WatcherComponent', () => {
  let component: WatcherComponent;
  let fixture: ComponentFixture<WatcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BinaryPipe,
        HexPipe,
        WatcherComponent
      ],
      providers: [
        MidiService,
        ControllerService
      ],
      imports: [
        StoreModule.forRoot({
          commands: commandReducer,
          devices: deviceReducer,
          messages: messageReducer,
          profiles: profileReducer
        }),
        HttpClientModule,
        FontAwesomeModule,
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
