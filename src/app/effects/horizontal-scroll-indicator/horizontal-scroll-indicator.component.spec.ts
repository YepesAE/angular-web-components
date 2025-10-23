import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalScrollIndicatorComponent } from './horizontal-scroll-indicator.component';

describe('HorizontalScrollIndicatorComponent', () => {
  let component: HorizontalScrollIndicatorComponent;
  let fixture: ComponentFixture<HorizontalScrollIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalScrollIndicatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizontalScrollIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
