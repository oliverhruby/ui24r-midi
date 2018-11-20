import { Injectable } from '@angular/core';
import { Subject, Observable, Observer, timer, interval } from 'rxjs';

@Injectable()
export class WebsocketService {
  constructor() {}

  private subject: Subject<MessageEvent>;

  public connect(url): Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log('Successfully connected: ' + url);
    }
    return this.subject;
  }

  private create(url): Subject<MessageEvent> {
    const ws = new WebSocket(url);
    interval(1000).subscribe(() => {
      ws.send('ALIVE');
    });

    const observable = Observable.create((obs: Observer<MessageEvent>) => {
      ws.onmessage = obs.next.bind(obs);
      ws.onerror = obs.error.bind(obs);
      ws.onclose = obs.complete.bind(obs);
      return ws.close.bind(ws);
    });
    const observer = {
      next: (data: string) => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(data);
        }
      }
    };
    return Subject.create(observer, observable);
  }
}
