import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferenceTextPicturesComponent } from './difference-text-pictures.component';

describe('DifferenceTextPicturesComponent', () => {
  let component: DifferenceTextPicturesComponent;
  let fixture: ComponentFixture<DifferenceTextPicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DifferenceTextPicturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DifferenceTextPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
