import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sliding-infinite-words',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sliding-infinite-words.component.html',
  styleUrl: './sliding-infinite-words.component.less'
})
export class SlidingInfiniteWordsComponent {
  texts: String[] = ['texto de prueba bastante largo mucho mas largo que los otros -',
     'hola mundo esto es un texto bien largo -',
     'hola mundo esto es un texto bien largo -',
     'hola mundo esto es un texto bien largo -']

  speed = 20; // pixels per second

  getDuration(text: String): number {
    const avgCharWidth = 10; // width of character aprox
    const textWidth = text.length * avgCharWidth;
    const totalDistance = textWidth * 2;
    return totalDistance / this.speed;
  }


}
