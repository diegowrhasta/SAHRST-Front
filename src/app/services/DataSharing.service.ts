import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataSharingService {
  public carAddedMessage: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public conductorAddedMsg: BehaviorSubject<string> = new BehaviorSubject<string>('');
}
