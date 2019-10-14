import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoRutaComponent } from './punto-ruta.component';

describe('PuntoRutaComponent', () => {
  let component: PuntoRutaComponent;
  let fixture: ComponentFixture<PuntoRutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoRutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
