import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoAddComponent } from './punto-add.component';

describe('PuntoAddComponent', () => {
  let component: PuntoAddComponent;
  let fixture: ComponentFixture<PuntoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
