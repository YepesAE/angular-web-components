import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header-fixed-fleeting-2',
  standalone: true,
  imports: [],
  templateUrl: './header-fixed-fleeting-2.component.html',
  styleUrl: './header-fixed-fleeting-2.component.less'
})
export class HeaderFixedFleeting2Component {

  @ViewChild('headerModal') headerModal!: ElementRef<HTMLDivElement>; 
  @ViewChild('headerModalbackground') headerModalbackground!: ElementRef<HTMLDivElement>; 
  
  showHeaderModal(){
    this.headerModal.nativeElement.classList.remove('hidden')
    this.headerModalbackground.nativeElement.classList.remove('opacity-hidden')
    this.headerModal.nativeElement.classList.add('text-animation')
  }

  hideHeaderModal(){
    this.headerModal.nativeElement.classList.add('hidden')
    this.headerModalbackground.nativeElement.classList.add('opacity-hidden')
    this.headerModal.nativeElement.classList.remove('text-animation')
  }
}
