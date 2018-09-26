import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import '../polyfills';

// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// services
import { ElectronService } from './services/electron.service';
import { MidiService } from './services/midi.service';
import { ControllerService } from './services/controller.service';

// directives
import { WebviewDirective } from './directives/webview.directive';

// components
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { WatcherComponent } from './components/watcher/watcher.component';
import { ProfileComponent } from './components/profile/profile.component';

// pipes
import { HexPipe } from './pipes/hex.pipe';

// reducers
import { reducer as deviceReducer } from './reducers/device.reducer';
import { reducer as messageReducer } from './reducers/message.reducer';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    WatcherComponent,
    SettingsComponent,
    ProfileComponent,
    WebviewDirective,
    HexPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({
      devices: deviceReducer,
      messages: messageReducer
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    ElectronService,
    MidiService,
    ControllerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
