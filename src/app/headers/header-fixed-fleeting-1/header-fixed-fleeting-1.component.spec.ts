import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFixedFleeting1Component } from './header-fixed-fleeting-1.component';

describe('HeaderFixedFleeting1Component', () => {
  let component: HeaderFixedFleeting1Component;
  let fixture: ComponentFixture<HeaderFixedFleeting1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderFixedFleeting1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFixedFleeting1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
