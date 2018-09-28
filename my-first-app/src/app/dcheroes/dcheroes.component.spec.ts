import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DCHEROESComponent } from './dcheroes.component';

describe('DCHEROESComponent', () => {
  let component: DCHEROESComponent;
  let fixture: ComponentFixture<DCHEROESComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DCHEROESComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DCHEROESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
