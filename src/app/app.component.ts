import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    listItems = 
    [
        {
            name: "Beware of Boxes",
            desc: "Demo game created with my game framework CXGF",
            tags: ["HTML", "CSS", "JavaScript", "CXGF - Codotronix Game Framework", "Game"],
            img: "assets/img/bob/bob_2.png",
            playUrl: "http://codotronix.github.io/cxgf/demos/beware-of-boxes/index.html"
        },
        {
            name: "Tankgular",
            desc: "A tank battle game where each tank is an AngularJS directive.",
            tags: ["AngularJS", "HTML", "CSS", "JavaScript", "Game"],
            img: "assets/img/tankgular/tankgular.png",
            playUrl: "http://codotronix.github.io/Tankgular/"
        },
        {
            name: "Asteroid Attack",
            desc: "Shoot down all the asteroids to save the day",
            tags: ["HTML", "CSS", "JavaScript", "jQuery", "Game"],
            img: "assets/img/astattack/astattack.png",
            playUrl: "http://codotronix.github.io/Asteroid-Attack/play.html"
        },
        {
            name: "Mini Puzzle  (Web)",
            desc: "A demo web version of the mobile Mini Puzzle game",
            tags: ["Cordova", "HTML5", "CSS3", "JavaScript", "jQuery", "Game"],
            img: "assets/img/mini-puzzle/mini-puzzle-desktop.png",
            playUrl: "http://codotronix.github.io/mini-puzzle/puzzle.html"
        },
        {
            name: "Go Gol2, Go",
            desc: "Explore the adventures of Gol2 in this browser based game",
            tags: ["HTML5", "CSS3", "JavaScript", "jQuery", "Game"],
            img: "assets/img/go-gol2-go/go-gol2-go.png",
            playUrl: "http://codotronix.github.io/Dourio/Final/"
        },    
        {
            name: "Mini Puzzle",
            desc: "A mobile jigsaw puzzle game for Android and Windows Phone",
            tags: ["Cordova", "HTML5", "CSS3", "JavaScript", "jQuery", "Game"],
            img: "assets/img/mini-puzzle/mini-puzzle.png",
            playStoreUrl: "https://play.google.com/store/apps/details?id=in.barick.cordova.minipuzzle",
            "windowsStoreUrl": "https://www.microsoft.com/en-us/store/games/mini-puzzle/9nblggh6gv5r",
            "amazonUrl": "http://www.amazon.com/dp/B017X1OE50/"
        },            
        {
            name: "Barick Tilefy",
            desc: "A plugin to create windoes metro style UI",
            tags: ["HTML", "CSS", "JavaScript", "jQuery", "hand.js", "Game"],
            img: "assets/img/barick-tilefy/barick-tilefy.gif",
            githubUrl: "https://github.com/codotronix/barick-tilefy"
        },
        {
            name: "Web 2",
            desc: "A tank battle game to demonstrate the browser responsiveness of AngularJS, where each tank is an angular directive.",
            tags: ["AngularJS", "HTML", "CSS", "JavaScript", "Game"],
            img: "assets/img/tankgular/tankgular.png",
            url: ""
        },
        {
            name: "Web 3",
            desc: "A simple browser based game where the player needs to shoot down all the asteroids to save the day",
            tags: ["HTML", "CSS", "JavaScript", "Game"],
            img: "assets/img/tankgular/tankgular.png",
            url: ""
        },
        {
            name: "Web 4",
            desc: "A simple browser based game where the player needs to shoot down all the asteroids to save the day",
            tags: ["HTML", "CSS", "JavaScript", "Game"],
            img: "assets/img/tankgular/tankgular.png",
            url: ""
        }
    ];
}
