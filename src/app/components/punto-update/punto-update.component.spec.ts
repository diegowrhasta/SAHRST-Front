import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoUpdateComponent } from './punto-update.component';

describe('PuntoUpdateComponent', () => {
  let component: PuntoUpdateComponent;
  let fixture: ComponentFixture<PuntoUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
