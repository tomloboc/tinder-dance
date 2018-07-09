import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCheckComponent } from './photo-check.component';

describe('PhotoCheckComponent', () => {
  let component: PhotoCheckComponent;
  let fixture: ComponentFixture<PhotoCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
