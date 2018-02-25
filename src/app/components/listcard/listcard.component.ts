import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-card',

  template: `
    <div class="list-card">
      item = {{item.name}}
    </div>
  `,

  styles: [
  `
    .list-card {
        border: 1px solid #00f;
    }

  `
  ]
})


export class ListCardComponent {
  @Input() item;
}
