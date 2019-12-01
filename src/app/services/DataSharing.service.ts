import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataSharingService {
  public alertMessage: BehaviorSubject<string> = new BehaviorSubject<string>('');
}
