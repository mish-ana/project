import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UservComponent } from './userv.component';

describe('UservComponent', () => {
  let component: UservComponent;
  let fixture: ComponentFixture<UservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UservComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
