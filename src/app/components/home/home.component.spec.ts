import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { TranslateModule } from '@ngx-translate/core';
import { SettingsComponent } from '../settings/settings.component';
import { MidiService } from '../../providers/midi.service';
import { WatcherComponent } from '../watcher/watcher.component';
import { ControllerService } from '../../providers/controller.service';
import { ProfileComponent } from '../profile/profile.component';
import { HttpClientModule } from '@angular/common/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProfileComponent,
        HomeComponent,
        WatcherComponent,
        SettingsComponent
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
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
