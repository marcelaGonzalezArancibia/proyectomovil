import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { QRwebPage } from './qrweb.page';

describe('QRwebPage', () => {
  let component: QRwebPage;
  let fixture: ComponentFixture<QRwebPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QRwebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
