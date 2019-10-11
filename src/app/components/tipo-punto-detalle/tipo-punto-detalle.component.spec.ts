import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPuntoDetalleComponent } from './tipo-punto-detalle.component';

describe('TipoPuntoDetalleComponent', () => {
  let component: TipoPuntoDetalleComponent;
  let fixture: ComponentFixture<TipoPuntoDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoPuntoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPuntoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
