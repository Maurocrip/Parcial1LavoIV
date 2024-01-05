import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienbenidoComponent } from './bienbenido.component';

describe('BienbenidoComponent', () => {
  let component: BienbenidoComponent;
  let fixture: ComponentFixture<BienbenidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BienbenidoComponent]
    });
    fixture = TestBed.createComponent(BienbenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
