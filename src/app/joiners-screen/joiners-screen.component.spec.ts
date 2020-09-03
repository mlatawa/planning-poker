import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinersScreenComponent } from './joiners-screen.component';

describe('JoinersScreenComponent', () => {
  let component: JoinersScreenComponent;
  let fixture: ComponentFixture<JoinersScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinersScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinersScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
