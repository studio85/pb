import {Component} from '@angular/core';

@Component({
    selector: 'gmap',
    template: `
        <div class="row">
			<div class="col-md-12" id="map" style="height:300px;"></div>
		</div>
        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-82443819-1', 'auto');
            ga('send', 'pageview');
        </script>
    `,
})

export class GmapComponent {

}