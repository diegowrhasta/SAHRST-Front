import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPuntoComponent } from './tipo-punto.component';

describe('TipoPuntoComponent', () => {
  let component: TipoPuntoComponent;
  let fixture: ComponentFixture<TipoPuntoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoPuntoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
