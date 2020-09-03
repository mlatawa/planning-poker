import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartersScreenComponent } from './starters-screen.component';

describe('StartersScreenComponent', () => {
  let component: StartersScreenComponent;
  let fixture: ComponentFixture<StartersScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartersScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartersScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
