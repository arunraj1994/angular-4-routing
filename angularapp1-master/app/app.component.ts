import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<div class="wrapper">
    
  	  <nav><li class="navigation"><a routerLink="/itca" routerLinkActive="active">ITCA</a></li>
      <li class="navigation"><a routerLink="/dev1" routerLinkActive="active">DEV1</a></li>
      <li class="navigation"><a routerLink="/adv2" routerLinkActive="active">ADV2</a></li>
      </nav>
      <div style="clear:both"></div>

   <router-outlet></router-outlet></div>`,
})
export class AppComponent  { name = 'Angular'; }
