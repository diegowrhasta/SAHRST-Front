import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoDetalleComponent } from './punto-detalle.component';

describe('PuntoDetalleComponent', () => {
  let component: PuntoDetalleComponent;
  let fixture: ComponentFixture<PuntoDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
