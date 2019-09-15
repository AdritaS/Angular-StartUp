import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { SharedModule } from './_common/shared/shared.module';
import { CoreModule } from './_common/core/core.module';

import { RouterModule } from '@angular/router';
import { routes } from './app.routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './home/landing/landing.component';
import { AboutComponent } from './home/about/about.component';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      LandingComponent,
      AboutComponent
   ],
   imports: [
      BrowserModule,
      CoreModule,
      SharedModule,
      RouterModule.forRoot(routes),
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   exports: [RouterModule]
})
export class AppModule { }
