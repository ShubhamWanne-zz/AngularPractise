import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AVENGERSCHARACTERComponent } from './avengerscharacter.component';

describe('AVENGERSCHARACTERComponent', () => {
  let component: AVENGERSCHARACTERComponent;
  let fixture: ComponentFixture<AVENGERSCHARACTERComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AVENGERSCHARACTERComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AVENGERSCHARACTERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
