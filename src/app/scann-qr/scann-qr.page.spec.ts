import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScannQRPage } from './scann-qr.page';

describe('ScannQRPage', () => {
  let component: ScannQRPage;
  let fixture: ComponentFixture<ScannQRPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ScannQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
