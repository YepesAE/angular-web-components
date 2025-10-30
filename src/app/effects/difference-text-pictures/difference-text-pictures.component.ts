import { AfterViewInit, Component } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-difference-text-pictures',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './difference-text-pictures.component.html',
  styleUrl: './difference-text-pictures.component.less'
})
export class DifferenceTextPicturesComponent implements AfterViewInit{

  images: {src: string, width: string, transformX: string}[] = [
    {src: "https://urbanjurgensen.com/cdn/407a2850f1b873253bda920257ba286620ac4ec1-8193x10241.jpg?fp-x=0.5&fp-y=0.5&w=960&h=1280&q=75&fit=crop&auto=format", width: "30%", transformX: "translateX(-100%)"}, 
    {src: "https://urbanjurgensen.com/cdn/407a2850f1b873253bda920257ba286620ac4ec1-8193x10241.jpg?fp-x=0.5&fp-y=0.5&w=960&h=1280&q=75&fit=crop&auto=format", width: "30%", transformX: "translateX(100%)"}, 
    {src: "https://urbanjurgensen.com/cdn/407a2850f1b873253bda920257ba286620ac4ec1-8193x10241.jpg?fp-x=0.5&fp-y=0.5&w=960&h=1280&q=75&fit=crop&auto=format", width: "30%", transformX: "translateX(-100%)"}, 
    {src: "https://urbanjurgensen.com/cdn/407a2850f1b873253bda920257ba286620ac4ec1-8193x10241.jpg?fp-x=0.5&fp-y=0.5&w=960&h=1280&q=75&fit=crop&auto=format", width: "30%", transformX: "translateX(100%)"}, 
    {src: "https://urbanjurgensen.com/cdn/407a2850f1b873253bda920257ba286620ac4ec1-8193x10241.jpg?fp-x=0.5&fp-y=0.5&w=960&h=1280&q=75&fit=crop&auto=format", width: "30%", transformX: "translateX(-100%)"}, 
    {src: "https://urbanjurgensen.com/cdn/407a2850f1b873253bda920257ba286620ac4ec1-8193x10241.jpg?fp-x=0.5&fp-y=0.5&w=960&h=1280&q=75&fit=crop&auto=format", width: "30%", transformX: "translateX(100%)"}, 
    {src: "https://urbanjurgensen.com/cdn/407a2850f1b873253bda920257ba286620ac4ec1-8193x10241.jpg?fp-x=0.5&fp-y=0.5&w=960&h=1280&q=75&fit=crop&auto=format", width: "30%", transformX: "translateX(-100%)"}, 
    {src: "https://urbanjurgensen.com/cdn/407a2850f1b873253bda920257ba286620ac4ec1-8193x10241.jpg?fp-x=0.5&fp-y=0.5&w=960&h=1280&q=75&fit=crop&auto=format", width: "30%", transformX: "translateX(100%)"}, 
    {src: "https://urbanjurgensen.com/cdn/407a2850f1b873253bda920257ba286620ac4ec1-8193x10241.jpg?fp-x=0.5&fp-y=0.5&w=960&h=1280&q=75&fit=crop&auto=format", width: "30%", transformX: "translateX(-100%)"}, 
    {src: "https://urbanjurgensen.com/cdn/407a2850f1b873253bda920257ba286620ac4ec1-8193x10241.jpg?fp-x=0.5&fp-y=0.5&w=960&h=1280&q=75&fit=crop&auto=format", width: "30%", transformX: "translateX(100%)"}, 
    {src: "https://urbanjurgensen.com/cdn/407a2850f1b873253bda920257ba286620ac4ec1-8193x10241.jpg?fp-x=0.5&fp-y=0.5&w=960&h=1280&q=75&fit=crop&auto=format", width: "30%", transformX: "translateX(-100%)"}, 
  ];

  ngAfterViewInit(){
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
