import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPaisComponent } from './listado-pais.component';

describe('ListadoPaisComponent', () => {
  let component: ListadoPaisComponent;
  let fixture: ComponentFixture<ListadoPaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoPaisComponent]
    });
    fixture = TestBed.createComponent(ListadoPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
