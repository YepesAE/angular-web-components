import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyManifestoComponent } from './sticky-manifesto.component';

describe('StickyManifestoComponent', () => {
  let component: StickyManifestoComponent;
  let fixture: ComponentFixture<StickyManifestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StickyManifestoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickyManifestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
