import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import {AccordionComponent} from './accordion.component';
import {GmapComponent} from './gmap.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,AccordionComponent,GmapComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
