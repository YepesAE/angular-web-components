import { Component } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

@Component({
  selector: 'app-difference-text-pictures',
  standalone: true,
  imports: [],
  templateUrl: './difference-text-pictures.component.html',
  styleUrl: './difference-text-pictures.component.less'
})
export class DifferenceTextPicturesComponent {

  ngOnInit(){
    this.pinText();
  }

  pinText(){
    ScrollTrigger.create({
      trigger: 'h1',
      start: 'top .container2',
      endTrigger: ".container2",
      end: 'bottom bottom',
      pin: true,
      pinSpacing: false,
      markers: true
    })
  }

}
