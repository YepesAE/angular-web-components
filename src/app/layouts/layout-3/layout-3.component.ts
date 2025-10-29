import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout-3.component.html',
  styleUrl: './layout-3.component.less'
})

export class Layout3Component {
  infoList: {shown: boolean, title: string, content: string}[] = [{shown: false, title: 'architechture with impact', content: 'We don’t stop at delivering code. We design scalable architectures, solve complex integration challenges, and prepare your systems for tomorrow. With us, SAP becomes a backbone for growth instead of a roadblock.'},
                                                  {shown: false, title: 'scalable expertize, zero friction', content: 'Extend your SAP team exactly when you need it. Our senior developers and architects join seamlessly, bringing deep expertise and the ability to adapt to changing project dynamics. No lengthy ramp-up, no overhead – just immediate impact on your business.'}, 
                                                  {shown: false, title: 'business-first, not code-first', content: 'Every technical decision is measured against real business outcomes. We align SAP solutions directly with your strategy, ensuring your system doesn’t just run, but drives efficiency and long-term success.'}]

  toggleShownInformation(index: number){
    if(!this.infoList[index].shown){
      this.infoList.forEach(info => {
        info.shown = false;
      });
      this.infoList[index].shown = true; 
    }else{
      this.infoList[index].shown = false; 
    }
  }

}


