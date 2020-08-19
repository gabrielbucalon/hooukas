import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigUserComponent } from './config-user.component';

describe('ConfigUserComponent', () => {
  let component: ConfigUserComponent;
  let fixture: ComponentFixture<ConfigUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
