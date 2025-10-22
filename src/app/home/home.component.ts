import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderFixedFleeting1Component } from "../header-fixed-fleeting-1/header-fixed-fleeting-1.component";
import { HeaderFixedFleeting2Component } from "../header-fixed-fleeting-2/header-fixed-fleeting-2.component";
import { StickyManifestoComponent } from "../sticky-manifesto/sticky-manifesto.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderFixedFleeting1Component, HeaderFixedFleeting2Component, StickyManifestoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {
}
