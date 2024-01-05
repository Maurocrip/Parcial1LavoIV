import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasActuadasComponent } from './peliculas-actuadas.component';

describe('PeliculasActuadasComponent', () => {
  let component: PeliculasActuadasComponent;
  let fixture: ComponentFixture<PeliculasActuadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeliculasActuadasComponent]
    });
    fixture = TestBed.createComponent(PeliculasActuadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
