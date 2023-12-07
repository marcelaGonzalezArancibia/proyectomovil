import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursoswebPage } from './cursosweb.page';

describe('CursoswebPage', () => {
  let component: CursoswebPage;
  let fixture: ComponentFixture<CursoswebPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CursoswebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
