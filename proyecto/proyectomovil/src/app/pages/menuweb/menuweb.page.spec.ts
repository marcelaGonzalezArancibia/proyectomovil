import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuwebPage } from './menuweb.page';

describe('MenuwebPage', () => {
  let component: MenuwebPage;
  let fixture: ComponentFixture<MenuwebPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuwebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
