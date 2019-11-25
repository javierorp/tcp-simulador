import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrosmenuComponent } from './parametrosmenu.component';

describe('ParametrosmenuComponent', () => {
  let component: ParametrosmenuComponent;
  let fixture: ComponentFixture<ParametrosmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrosmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrosmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
