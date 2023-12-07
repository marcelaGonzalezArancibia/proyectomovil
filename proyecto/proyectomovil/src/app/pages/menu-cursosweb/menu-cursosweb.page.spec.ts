import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuCursoswebPage } from './menu-cursosweb.page';

describe('MenuCursoswebPage', () => {
  let component: MenuCursoswebPage;
  let fixture: ComponentFixture<MenuCursoswebPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuCursoswebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
