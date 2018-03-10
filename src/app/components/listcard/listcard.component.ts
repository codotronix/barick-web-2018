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
        <div class="button-pane">

            <!-- Button Text -->
            <span class="text" *ngIf="item.playUrl">Play</span>
            <span class="text" *ngIf="item.webUrl">Visit</span>
            <span class="text" *ngIf="item.githubUrl">Fork it</span>
            <span class="text" *ngIf="item.playStoreUrl || item.windowsStoreUrl || item.amazonUrl">Get it</span>

            <!-- <i class="fas fa-angle-double-right click-there"></i> -->
            <i class="far fa-hand-point-right click-there"></i>

            <!-- Play Button for Games -->            
            <a class="button play-btn" *ngIf="item.playUrl" [href]="item.playUrl" target="_blank">
                <span class="fas fa-gamepad icon"></span>
            </a>

            <!-- Visit Button for Websites -->      
            <a class="button web-btn" *ngIf="item.webUrl" [href]="item.webUrl" target="_blank">
                <span class="fas fa-globe icon"></span>
            </a>
            
            <!-- Github Button for Forking -->      
            <a class="button web-btn" *ngIf="item.githubUrl" [href]="item.githubUrl" target="_blank">
                <span class="fab fa-github icon"></span>
            </a>

            <!-- Amazon Button -->            
            <a class="button amazon-btn" *ngIf="item.amazonUrl" [href]="item.amazonUrl" target="_blank">
                <span class="fab fa-amazon icon"></span>
            </a>
                        
            <!-- Windows Store Button -->            
            <a class="button wp-btn" *ngIf="item.windowsStoreUrl" [href]="item.windowsStoreUrl" target="_blank">
                <span class="fab fa-windows icon"></span>
            </a>

            <!-- Android Play Store Button -->            
            <a class="button playstore-btn" *ngIf="item.playStoreUrl" [href]="item.playStoreUrl" target="_blank">
                <span class="fab fa-android icon"></span>
            </a>

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
        position: relative;
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
    .list-card .button-pane {        
        background: #f00;
        height: 40px;
        position: absolute;
        bottom: 2px;
        left: 0;
        right: 0;
        color: #fff;
        font-size: 20px;
    }
    .list-card .button-pane .button {
        float: right;
        display: inline-block;
        height: 100%;
        margin-left: 2px;
    }
    .list-card .button-pane .icon {
        background: #000;
        color: #fff;
        padding: 10px;
        text-align: center;
    }
    .list-card .button-pane .text {
        display: inline-block;
        text-align: center;
        padding: 5px 2px 5px 10px;
    }

    .list-card .button-pane .click-there {
        font-size: 18px;
    }



    `
    ]
})


export class ListCardComponent {
    @Input() item;
}
