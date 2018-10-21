import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import { TranslateModule } from '@ngx-translate/core';
import { MidiService } from '../../services/midi.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from '../profile/profile.component';
import { reducer as deviceReducer } from '../../reducers/device.reducer';
import { reducer as profileReducer } from '../../reducers/profile.reducer';
import { reducer as messageReducer } from '../../reducers/message.reducer';
import { reducer as connectionReducer } from '../../reducers/connection.reducer';
import { StoreModule } from '@ngrx/store';

// FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay, faCaretSquareDown, faCaretSquareUp, faPlusSquare, faPowerOff } from '@fortawesome/free-solid-svg-icons';
library.add(faPlay, faCaretSquareDown, faCaretSquareUp, faPlusSquare, faPowerOff);


describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProfileComponent,
        SettingsComponent
      ],
      providers: [ MidiService ],
      imports: [
        StoreModule.forRoot({
          devices: deviceReducer,
          messages: messageReducer,
          profiles: profileReducer,
          connection: connectionReducer
        }),
        FormsModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
