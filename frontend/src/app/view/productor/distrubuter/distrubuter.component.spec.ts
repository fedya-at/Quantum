import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrubuterComponent } from './distrubuter.component';

describe('DistrubuterComponent', () => {
  let component: DistrubuterComponent;
  let fixture: ComponentFixture<DistrubuterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DistrubuterComponent]
    });
    fixture = TestBed.createComponent(DistrubuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
