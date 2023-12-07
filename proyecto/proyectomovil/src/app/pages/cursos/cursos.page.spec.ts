import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursosPage } from './cursos.page';

describe('CursosPage', () => {
  let component: CursosPage;
  let fixture: ComponentFixture<CursosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CursosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}
