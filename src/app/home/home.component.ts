import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderFixedFleeting1Component } from "../headers/header-fixed-fleeting-1/header-fixed-fleeting-1.component";
import { HeaderFixedFleeting2Component } from "../headers/header-fixed-fleeting-2/header-fixed-fleeting-2.component";
import { StickyManifestoComponent } from "../effects/sticky-manifesto/sticky-manifesto.component";
import { Layout1Component } from "../layouts/layout-1/layout-1.component";
import { Footer1Component } from "../footers/footer-1/footer-1.component";
import { SlidingInfiniteWordsComponent } from "../effects/sliding-infinite-words/sliding-infinite-words.component";
import { Layout2Component } from "../layouts/layout-2/layout-2.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderFixedFleeting1Component, HeaderFixedFleeting2Component, StickyManifestoComponent, Layout1Component, Footer1Component, SlidingInfiniteWordsComponent, Layout2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent{

}
