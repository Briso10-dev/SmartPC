import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type AppMode = 'simple' | 'guided' | 'expert';

@Injectable({
  providedIn: 'root'
})
export class ModeService {
  private readonly modeSubject = new BehaviorSubject<AppMode>('simple');
  public readonly mode$ = this.modeSubject.asObservable();

  public getMode(): AppMode {
    return this.modeSubject.value;
  }

  public setMode(mode: AppMode): void {
    this.modeSubject.next(mode);
  }
}
