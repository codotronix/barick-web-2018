import { Component, Input } from '@angular/core';

@Component({
    selector: 'list-card',

    template: `
    <div class="list-card">
        <div class="title">{{item.name}}</div>
        <div class="tags">
            <span *ngFor="let tag of item.tags" class="tag">
                {{tag}}
            </span>
        </div>
        <img class="img" alt="{{item.name}} image" [src]="item.img"/>
        <div class="desc">            
            {{item.desc}}
        </div>        
    </div>

    `,

    styles: [
    `
    .list-card {
        border-bottom: 1px solid steelblue;
        padding: 10px 15px 20px;
        height: 375px;
        overflow: auto;
    }
    .list-card .title {
        font-size: 22px;
        font-weight: bold;
    }
    .list-card .img {
        width: 100%;
        border: 1px solid #ccc;
        padding: 5px;
        margin-top: 10px;
        max-height: 208px;
    }
    .list-card .desc {
        font-size: 16px;
        margin-top: 10px;
    }
    .list-card .tags {
        margin-top: 10px;
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
