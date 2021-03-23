import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly stateKey: string = 'state';
  private state: { [key: string]: any };
  public state$ = new BehaviorSubject<{ [key: string]: any }>({});

  constructor(@Inject('LocalStorage') private localStorageService: Storage) {}
  getState(): BehaviorSubject<{ [p: string]: any }> {
    if (localStorage.getItem(this.stateKey) !== null) {
      this.state = JSON.parse(
        atob(this.localStorageService.getItem(this.stateKey) || '{}')
      );
    } else {
      this.state = JSON.parse(
        this.localStorageService.getItem(this.stateKey) || '{}'
      );
    }
    Object.freeze(this.state);
    this.state$.next(this.state);
    return this.state$;
  }

  public setState(key: string, value: any): void {
    this.state = { ...this.state, [key]: value };
    this.localStorageService.setItem(
      this.stateKey,
      btoa(JSON.stringify(this.state))
    );
    Object.freeze(this.state);
    this.state$.next(this.state);
  }
}
