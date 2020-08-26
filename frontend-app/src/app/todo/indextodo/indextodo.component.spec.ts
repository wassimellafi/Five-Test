import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndextodoComponent } from './indextodo.component';

describe('IndextodoComponent', () => {
  let component: IndextodoComponent;
  let fixture: ComponentFixture<IndextodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndextodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndextodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
