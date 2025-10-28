import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingInfiniteWordsComponent } from './sliding-infinite-words.component';

describe('SlidingInfiniteWordsComponent', () => {
  let component: SlidingInfiniteWordsComponent;
  let fixture: ComponentFixture<SlidingInfiniteWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidingInfiniteWordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidingInfiniteWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
