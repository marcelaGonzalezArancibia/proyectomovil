import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CredencialwebPage } from './credencialweb.page';

describe('CredencialwebPage', () => {
  let component: CredencialwebPage;
  let fixture: ComponentFixture<CredencialwebPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CredencialwebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
