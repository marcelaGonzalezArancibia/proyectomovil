import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TomarAsistenciaWebPage } from './tomar-asistencia-web.page';

describe('TomarAsistenciaWebPage', () => {
  let component: TomarAsistenciaWebPage;
  let fixture: ComponentFixture<TomarAsistenciaWebPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TomarAsistenciaWebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
