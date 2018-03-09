import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-card-holder',
  template: `
    <div class="list-card-holder">
        <h3 class="group-name">
            {{itemGroup.Heading}}
        </h3>

        <list-card *ngFor="let item of itemGroup.items" [item]="item" class="col-xs-12 col-sm-4 col-md-3"></list-card>
    </div>
  `,
  styles: [
  `
    .list-card-holder .group-name {
        background: #bf0e0e;
        color: #fff;
        font-size: 24px;
        padding: 5px 10px;
        border-radius: 4px;
    }

  `
  ]
})
export class ListCardHolderComponent {
    @Input() itemGroup;
}
