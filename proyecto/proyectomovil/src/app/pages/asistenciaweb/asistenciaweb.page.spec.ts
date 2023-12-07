import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsistenciawebPage } from './asistenciaweb.page';

describe('AsistenciawebPage', () => {
  let component: AsistenciawebPage;
  let fixture: ComponentFixture<AsistenciawebPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AsistenciawebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
