import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioContacto } from './formulario-contacto';

describe('FormularioContacto', () => {
  let component: FormularioContacto;
  let fixture: ComponentFixture<FormularioContacto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioContacto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioContacto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
