import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sticky-manifesto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sticky-manifesto.component.html',
  styleUrl: './sticky-manifesto.component.less'
})
export class StickyManifestoComponent {
  
  @ViewChild('containerRef') containerRef!: ElementRef<HTMLDivElement>;
  scrollElements: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', ];
  textParts: string[] = [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    "Aut quibusdam sed quo nobis molestiae consequatur eveniet ex tenetur!",
    "Culpa eum et eius aliquam aut?",
    "Ut blanditiis perferendis enim nemo nulla.",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    "Aut quibusdam sed quo nobis molestiae consequatur eveniet ex tenetur!",
    "Culpa eum et eius aliquam aut?",
    "Ut blanditiis perferendis enim nemo nulla."
  ];
  activeIndex = 0;
  containerTop = 0;
  containerHeight = 0;

  ngAfterViewInit(){
    const rect = this.containerRef.nativeElement.getBoundingClientRect();
    this.containerTop = rect.top + window.scrollY;
    this.containerHeight = this.containerRef.nativeElement.offsetHeight;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(){
    const scrollY = window.scrollY;
    if (!this.containerHeight) return;

    const progress = (scrollY - this.containerTop) / this.containerHeight;

    if (progress < 0) {
      this.activeIndex = 0;
      return;
    }
    if (progress > 1) {
      this.activeIndex = this.textParts.length - 1;
      return;
    }
    const index = Math.floor(progress * this.textParts.length);
    this.activeIndex = Math.min(Math.max(index, 0), this.textParts.length - 1);
  }

}
