import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTransaccionComponent } from './registro-transaccion.component';

describe('RegistroTransaccionComponent', () => {
  let component: RegistroTransaccionComponent;
  let fixture: ComponentFixture<RegistroTransaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroTransaccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroTransaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
