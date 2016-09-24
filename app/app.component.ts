import {Component} from '@angular/core';
import {AccordionComponent} from './accordion.component';
import {GmapComponent} from './gmap.component';

@Component({
    selector: 'peoples-ballot',
    template: `
    <accordion></accordion>
    <gmap></gmap>
    `,
})

export class AppComponent {
}