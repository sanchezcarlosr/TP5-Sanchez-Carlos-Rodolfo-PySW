import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorDivisaComponent } from './conversor-divisa.component';

describe('ConversorDivisaComponent', () => {
  let component: ConversorDivisaComponent;
  let fixture: ComponentFixture<ConversorDivisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversorDivisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversorDivisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
