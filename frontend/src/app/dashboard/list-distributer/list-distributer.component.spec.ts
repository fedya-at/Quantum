import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDistributerComponent } from './list-distributer.component';

describe('ListDistributerComponent', () => {
  let component: ListDistributerComponent;
  let fixture: ComponentFixture<ListDistributerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDistributerComponent]
    });
    fixture = TestBed.createComponent(ListDistributerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
