import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-cursor1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-cursor1.component.html',
  styleUrl: './custom-cursor1.component.less'
})
export class CustomCursor1Component {
  @ViewChild('cursor1') cursor1!: ElementRef<HTMLDivElement>;
  isOverClickable = false;
  cursorWidth = 50;

  ngOnInit(): void {
    document.addEventListener('mouseover', this.onMouseOver);
    document.addEventListener('mouseout', this.onMouseOut);
  }

  onMouseMove(event: MouseEvent){
    // Transform is better than changing top and left properties
    this.cursor1.nativeElement.style.transform = `translate(${event.clientX - (this.cursorWidth/2)}px, ${event.clientY - this.cursorWidth/2}px)`;
  }

  private onMouseOver = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target?.closest('.clickable')) {
      if (!this.isOverClickable) {
        this.isOverClickable = true;
        this.onHoverClickableStart();
      }
    }
  };

  private onMouseOut = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target?.closest('.clickable')) {
      this.isOverClickable = false;
      this.onHoverClickableEnd();
    }
  };

  private onHoverClickableStart() {
    this.cursor1.nativeElement.style.width = "6px";
    this.cursor1.nativeElement.style.height = "6px";
    this.cursorWidth = 3;
  }

  private onHoverClickableEnd() {
    this.cursor1.nativeElement.style.width = "50px";
    this.cursor1.nativeElement.style.height = "50px";
    this.cursorWidth = 50;
  }
}
