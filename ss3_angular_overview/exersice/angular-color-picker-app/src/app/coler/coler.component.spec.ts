import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColerComponent } from './coler.component';

describe('ColerComponent', () => {
  let component: ColerComponent;
  let fixture: ComponentFixture<ColerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
