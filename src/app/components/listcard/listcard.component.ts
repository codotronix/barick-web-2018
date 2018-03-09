import { Component, Input } from '@angular/core';

@Component({
    selector: 'list-card',

    template: `
    <div class="list-card">
        <div class="title">{{item.name}}</div>
        <div class="desc">{{item.desc}}</div>
        <div class="tags">
            <span *ngFor="let tag of item.tags" class="tag">
                {{tag}}
            </span>
        </div>
    </div>

    `,

    styles: [
    `
    .list-card {
        border-bottom: 1px solid steelblue;
        padding: 10px 15px 15px;
    }
    .list-card .title {
        font-size: 22px;
        font-weight: bold;
    }
    .list-card .desc {
        font-size: 16px;
    }
    .list-card .tags .tag {
        display: inline-block;
        padding: 2px 5px;
        margin: 1px 3px;
        background: steelblue;
        color: #fff;
        font-size: 12px;
        border-radius: 3px;
    }

    `
    ]
})


export class ListCardComponent {
    @Input() item;
}
