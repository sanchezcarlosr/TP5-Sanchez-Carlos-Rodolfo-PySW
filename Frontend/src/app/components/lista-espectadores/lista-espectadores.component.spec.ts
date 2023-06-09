import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEspectadoresComponent } from './lista-espectadores.component';

describe('ListaEspectadoresComponent', () => {
  let component: ListaEspectadoresComponent;
  let fixture: ComponentFixture<ListaEspectadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEspectadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEspectadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
