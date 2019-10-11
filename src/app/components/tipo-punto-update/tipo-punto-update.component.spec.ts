import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPuntoUpdateComponent } from './tipo-punto-update.component';

describe('TipoPuntoUpdateComponent', () => {
  let component: TipoPuntoUpdateComponent;
  let fixture: ComponentFixture<TipoPuntoUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoPuntoUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPuntoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
