import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFixedFleeting2Component } from './header-fixed-fleeting-2.component';

describe('HeaderFixedFleeting2Component', () => {
  let component: HeaderFixedFleeting2Component;
  let fixture: ComponentFixture<HeaderFixedFleeting2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderFixedFleeting2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFixedFleeting2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
