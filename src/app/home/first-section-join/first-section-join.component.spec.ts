import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSectionJoinComponent } from './first-section-join.component';

describe('FirstSectionJoinComponent', () => {
  let component: FirstSectionJoinComponent;
  let fixture: ComponentFixture<FirstSectionJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstSectionJoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSectionJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
