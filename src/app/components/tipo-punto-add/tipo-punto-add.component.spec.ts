import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPuntoAddComponent } from './tipo-punto-add.component';

describe('TipoPuntoAddComponent', () => {
  let component: TipoPuntoAddComponent;
  let fixture: ComponentFixture<TipoPuntoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoPuntoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPuntoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
