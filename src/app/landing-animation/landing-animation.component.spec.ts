import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingAnimationComponent } from './landing-animation.component';

describe('LandingAnimationComponent', () => {
  let component: LandingAnimationComponent;
  let fixture: ComponentFixture<LandingAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
