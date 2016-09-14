import {Component} from '@angular/core'
import {RegionService} from './region.service'

@Component({
    selector: 'regions',
    template: `
    <form class="form" role="form">
	    <div class="form-group">
		    <label for="county">County</label>
			<input type="county" class="form-control">
		</div>
		<button type="submit" class="btn btn-default">Submit</button>
	</form>
    `,
    providers: [RegionService]
})

export class RegionComponent {
    title: 'Title for the authors page';
    region: string;

    constructor(regionService: RegionService){
        this.region = regionService.getRegion();
    }
}