import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupbarComponent } from './supbar.component';

describe('SupbarComponent', () => {
  let component: SupbarComponent;
  let fixture: ComponentFixture<SupbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
