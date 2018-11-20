import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { reducer as deviceReducer } from '../../reducers/device.reducer';
import { reducer as profileReducer } from '../../reducers/profile.reducer';
import { reducer as messageReducer } from '../../reducers/message.reducer';
import { reducer as connectionReducer } from '../../reducers/connection.reducer';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProfileComponent
      ],
      providers: [
      ],
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
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
