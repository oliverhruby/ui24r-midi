import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';
import { ElectronService } from './services/electron.service';
import { MidiService } from './services/midi.service';
import { StoreModule } from '@ngrx/store';
import { reducer as deviceReducer } from './reducers/device.reducer';
import { reducer as profileReducer } from './reducers/profile.reducer';
import { reducer as messageReducer } from './reducers/message.reducer';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        ElectronService,
        MidiService
      ],
      imports: [
        StoreModule.forRoot({
          devices: deviceReducer,
          messages: messageReducer,
          profiles: profileReducer
        }),
        RouterTestingModule,
        TranslateModule.forRoot()
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

class TranslateServiceStub {
  setDefaultLang(lang: string): void {
  }
}
