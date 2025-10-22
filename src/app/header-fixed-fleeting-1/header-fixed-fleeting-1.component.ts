import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header-fixed-fleeting-1',
  standalone: true,
  imports: [],
  templateUrl: './header-fixed-fleeting-1.component.html',
  styleUrl: './header-fixed-fleeting-1.component.less'
})
export class HeaderFixedFleeting1Component {

  @ViewChild('header') header!: ElementRef<HTMLDivElement>;
  @ViewChild('mobileOptions') mobileOptions!: ElementRef<HTMLDivElement>;
  lastScroll = 0;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if(currentScroll > this.lastScroll){
      this.hideHeader();
    }else if(currentScroll < this.lastScroll){
      this.showHeader();
    }
    this.lastScroll = currentScroll <= 0 ? 0 : currentScroll;
  }

  hideHeader(){
    this.header?.nativeElement.classList.add('hidden');
  }

  showHeader(){
    this.header?.nativeElement.classList.remove('hidden');
  }

  toggleMobileHeader(){
    this.mobileOptions?.nativeElement.classList.contains('shown') ? this.hideMobileHeader() : this.showMobileHeader();
  }

  showMobileHeader(){
    this.mobileOptions?.nativeElement.classList.add('shown');
  }
  
  hideMobileHeader(){
    this.mobileOptions?.nativeElement.classList.remove('shown');
  }
}
    


