import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';
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

  images: {src: string, width: string, pos: string}[] = [
    {src: "https://urbanjurgensen.com/cdn/407a2850f1b873253bda920257ba286620ac4ec1-8193x10241.jpg?fp-x=0.5&fp-y=0.5&w=960&h=1280&q=75&fit=crop&auto=format", width: "30%", pos: 'left'}, 
    {src: "https://urbanjurgensen.com/cdn/407a2850f1b873253bda920257ba286620ac4ec1-8193x10241.jpg?fp-x=0.5&fp-y=0.5&w=960&h=1280&q=75&fit=crop&auto=format", width: "45%", pos: 'left'}, 
    {src: "https://urbanjurgensen.com/cdn/407a2850f1b873253bda920257ba286620ac4ec1-8193x10241.jpg?fp-x=0.5&fp-y=0.5&w=960&h=1280&q=75&fit=crop&auto=format", width: "60%", pos: 'right'}, 
    {src: "https://urbanjurgensen.com/cdn/407a2850f1b873253bda920257ba286620ac4ec1-8193x10241.jpg?fp-x=0.5&fp-y=0.5&w=960&h=1280&q=75&fit=crop&auto=format", width: "70%", pos: 'left'}, 
    {src: "https://urbanjurgensen.com/cdn/407a2850f1b873253bda920257ba286620ac4ec1-8193x10241.jpg?fp-x=0.5&fp-y=0.5&w=960&h=1280&q=75&fit=crop&auto=format", width: "10%", pos: 'right'}, 
    {src: "https://urbanjurgensen.com/cdn/407a2850f1b873253bda920257ba286620ac4ec1-8193x10241.jpg?fp-x=0.5&fp-y=0.5&w=960&h=1280&q=75&fit=crop&auto=format", width: "20%", pos: 'left'}, 
    {src: "https://urbanjurgensen.com/cdn/407a2850f1b873253bda920257ba286620ac4ec1-8193x10241.jpg?fp-x=0.5&fp-y=0.5&w=960&h=1280&q=75&fit=crop&auto=format", width: "30%", pos: 'right'}, 
    {src: "https://urbanjurgensen.com/cdn/407a2850f1b873253bda920257ba286620ac4ec1-8193x10241.jpg?fp-x=0.5&fp-y=0.5&w=960&h=1280&q=75&fit=crop&auto=format", width: "60%", pos: 'left'}, 
    {src: "https://urbanjurgensen.com/cdn/407a2850f1b873253bda920257ba286620ac4ec1-8193x10241.jpg?fp-x=0.5&fp-y=0.5&w=960&h=1280&q=75&fit=crop&auto=format", width: "20%", pos: 'left'}, 
    {src: "https://urbanjurgensen.com/cdn/407a2850f1b873253bda920257ba286620ac4ec1-8193x10241.jpg?fp-x=0.5&fp-y=0.5&w=960&h=1280&q=75&fit=crop&auto=format", width: "80%", pos: 'right'}, 
    {src: "https://urbanjurgensen.com/cdn/407a2850f1b873253bda920257ba286620ac4ec1-8193x10241.jpg?fp-x=0.5&fp-y=0.5&w=960&h=1280&q=75&fit=crop&auto=format", width: "10%", pos: 'right'}, 
  ];

  ngAfterViewInit(){
    this.pinText(); 
  }

  pinText(){
    ScrollTrigger.create({
      trigger: '#titleDifference',
      start: 'top .container',
      endTrigger: ".container",
      end: 'bottom bottom',
      pin: true,
      pinSpacing: false,
      markers: true
    })
  }

}
