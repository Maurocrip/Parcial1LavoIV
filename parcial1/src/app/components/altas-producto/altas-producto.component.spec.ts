import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltasProductoComponent } from './altas-producto.component';

describe('AltasProductoComponent', () => {
  let component: AltasProductoComponent;
  let fixture: ComponentFixture<AltasProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltasProductoComponent]
    });
    fixture = TestBed.createComponent(AltasProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
