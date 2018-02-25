import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-card-holder',
  template: `
    <div class="col-xs-12 col-sm-4 col-md-3 list-card-holder">
        <h3>
            {{itemGroup.Heading}}
        </h3>

        <list-card *ngFor="let item of itemGroup.items" [item]="item"></list-card>
    </div>
  `,
  styles: [
  `
    

  `
  ]
})
export class ListCardHolderComponent {
    @Input() itemGroup;
}
