import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoRutaAddComponent } from './punto-ruta-add.component';

describe('PuntoRutaAddComponent', () => {
  let component: PuntoRutaAddComponent;
  let fixture: ComponentFixture<PuntoRutaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoRutaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoRutaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
