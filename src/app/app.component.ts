import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { HeaderFixedFleeting1Component } from "./headers/header-fixed-fleeting-1/header-fixed-fleeting-1.component";
import { HeaderFixedFleeting2Component } from "./headers/header-fixed-fleeting-2/header-fixed-fleeting-2.component";
import { HorizontalScrollIndicatorComponent } from "./effects/horizontal-scroll-indicator/horizontal-scroll-indicator.component";
import { CustomCursor1Component } from "./cursors/custom-cursor1/custom-cursor1.component";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderFixedFleeting1Component, HeaderFixedFleeting2Component, HorizontalScrollIndicatorComponent, CustomCursor1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent implements AfterViewInit{
  title = 'web-components';
  smoother!: ScrollSmoother;

  ngAfterViewInit(){
    this.initiateSmoother();
  }
  
  initiateSmoother(){
    if (this.smoother) this.smoother.kill();

    this.smoother = ScrollSmoother.create({
      wrapper: '.smooth-wrapper',
      content: '.smooth-content',
      smooth: 2,
      effects: true,
      normalizeScroll: true
    });
  }
}