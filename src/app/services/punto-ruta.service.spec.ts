import { TestBed, inject } from '@angular/core/testing';

import { PuntoRutaService } from './punto-ruta.service';

describe('PuntoRutaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PuntoRutaService]
    });
  });

  it('should be created', inject([PuntoRutaService], (service: PuntoRutaService) => {
    expect(service).toBeTruthy();
  }));
});
