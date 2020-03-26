import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoparametrosComponent } from './infoparametros.component';

describe('InfoparametrosComponent', () => {
  let component: InfoparametrosComponent;
  let fixture: ComponentFixture<InfoparametrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoparametrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoparametrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
