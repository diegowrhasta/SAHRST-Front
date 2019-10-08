import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductorDetalleComponent } from './conductor-detalle.component';

describe('ConductorDetalleComponent', () => {
  let component: ConductorDetalleComponent;
  let fixture: ComponentFixture<ConductorDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConductorDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductorDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
