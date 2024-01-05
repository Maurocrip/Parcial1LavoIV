import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogeadosComponent } from './logeados.component';

describe('LogeadosComponent', () => {
  let component: LogeadosComponent;
  let fixture: ComponentFixture<LogeadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogeadosComponent]
    });
    fixture = TestBed.createComponent(LogeadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
