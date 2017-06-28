import { Component } from '@angular/core';

@Component({
  selector: 'app-adv2',
  template: `<div class="service-name">
  				<h1>Service name</h1>
  				<ul class="service-list">
  					<li>LOGIN</li>
  					<li>MTG</li>
  					<li>TRANSACTION ACCOUNT</li>
  				</ul>
             </div>
             <div class="status">
  				<h1>Status</h1>
  				<ul class="status-list">
  				<li><span class="glyphicon glyphicon-ok-circle ok-sign"></span><span class="glyphicon glyphicon-remove-circle remove-sign"></span></li>
  				<li><span class="glyphicon glyphicon-ok-circle ok-sign"></span><span class="glyphicon glyphicon-remove-circle remove-sign"></span></li>
  				<li><span class="glyphicon glyphicon-ok-circle ok-sign"></span><span class="glyphicon glyphicon-remove-circle remove-sign"></span></li>
  				</ul>
             </div>`,
})
export class Adv2Component  { name = 'page3'; }
