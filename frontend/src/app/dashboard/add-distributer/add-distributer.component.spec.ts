import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDistributerComponent } from './add-distributer.component';

describe('AddDistributerComponent', () => {
  let component: AddDistributerComponent;
  let fixture: ComponentFixture<AddDistributerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDistributerComponent]
    });
    fixture = TestBed.createComponent(AddDistributerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
