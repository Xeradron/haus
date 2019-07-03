import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendtestComponent } from './backendtest.component';

describe('BackendtestComponent', () => {
  let component: BackendtestComponent;
  let fixture: ComponentFixture<BackendtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
