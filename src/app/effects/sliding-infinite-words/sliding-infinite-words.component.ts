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
  texts: String[] = ['texto de prueba bastante largo -',
     'hola mundo esto es un texto bien largo -',
     'hola mundo esto es un texto bien largo -',
     'hola mundo esto es un texto bien largo -']

}
