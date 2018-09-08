import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatcherComponent } from './watcher.component';
import { TranslateModule } from '@ngx-translate/core';

describe('WatcherComponent', () => {
  let component: WatcherComponent;
  let fixture: ComponentFixture<WatcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WatcherComponent
      ],
      providers: [],
      imports: [
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
