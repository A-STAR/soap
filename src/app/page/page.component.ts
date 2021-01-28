import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  data$ = this.route.data.pipe(
    shareReplay()
  );

  constructor(private route: ActivatedRoute) { }

}
