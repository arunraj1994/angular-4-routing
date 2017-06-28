import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes }   from '@angular/router';
import { AppComponent }   from './app.component';
import { ItcaComponent } from './itca.component';
import { Dev1Component } from './dev1.component';
import { Adv2Component } from './adv2.component';

const appRoutes: Routes = [
  {
        path: 'itca',
        component: ItcaComponent
      },
      {
        path: 'dev1',
        component: Dev1Component
      },
      {
        path: 'adv2',
        component: Adv2Component
      }
];


@NgModule({
    imports: [BrowserModule,
         
             RouterModule.forRoot(appRoutes)
      ],
    declarations: [AppComponent,
                   ItcaComponent,
                   Dev1Component,
                   Adv2Component
                   ],
    bootstrap: [AppComponent]
})

export class AppModule {

 }
