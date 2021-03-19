import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class CoachService {
  private subject = new Subject<string>();

  sendData(coach: string): void {
    this.subject.next(coach);
  }

  clearData(): void {
    this.subject.next();
  }

  getData(): Observable<string> {
    return this.subject.asObservable();
  }
  constructor() {}
}
