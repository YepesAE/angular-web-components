import { AfterViewInit, Component, HostListener } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

@Component({
  selector: 'app-horizontal-scroll-indicator',
  standalone: true,
  imports: [],
  templateUrl: './horizontal-scroll-indicator.component.html',
  styleUrl: './horizontal-scroll-indicator.component.less'
})
export class HorizontalScrollIndicatorComponent implements AfterViewInit{

  ngAfterViewInit(){
    this.scrollIndicatorAnimation();
  }

  scrollIndicatorAnimation(){
    gsap.to(".horizontal-scroll-indicator", {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: () => `+=${document.documentElement.scrollHeight - window.innerHeight}`,
        scrub: true,
        // markers: true
      }
    });
  }

  refreshScrollIndicator() {
    ScrollTrigger.refresh();
    // this.scrollIndicatorAnimation();
  }

}
