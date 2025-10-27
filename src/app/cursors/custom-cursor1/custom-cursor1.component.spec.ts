import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCursor1Component } from './custom-cursor1.component';

describe('CustomCursor1Component', () => {
  let component: CustomCursor1Component;
  let fixture: ComponentFixture<CustomCursor1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomCursor1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomCursor1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
