import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    listItems = [
                {
                    name: "Beware of Boxes",
                    desc: "Demo game created with my game framework CXGF",
                    tags: ["HTML", "CSS", "JavaScript", "CXGF - Codotronix Game Framework", "Game"],
                    img: "assets/img/tankgular/tankgular.png",
                    url: ""
                },
                {
                    name: "Tankgular",
                    desc: "A tank battle game where each tank is an AngularJS directive.",
                    tags: ["AngularJS", "HTML", "CSS", "JavaScript", "Game"],
                    img: "assets/img/tankgular/tankgular.png",
                    url: ""
                },
                {
                    name: "Asteroid Attack",
                    desc: "Shoot down all the asteroids to save the day",
                    tags: ["HTML", "CSS", "JavaScript", "jQuery", "Game"],
                    img: "assets/img/astattack/astattack.png",
                    url: ""
                },
                {
                    name: "Mini Puzzle",
                    desc: "A mobile jigsaw puzzle game available for Android and Windows Phone",
                    tags: ["Cordova", "HTML5", "CSS3", "JavaScript", "jQuery", "Game"],
                    img: "assets/img/mini-puzzle/mini-puzzle-desktop.png",
                    url: ""
                },
                {
                    name: "Go Gol2, Go",
                    desc: "Explore the adventures of Gol2 in this browser based game",
                    tags: ["HTML5", "CSS3", "JavaScript", "jQuery", "Game"],
                    img: "assets/img/go-gol2-go/go-gol2-go.png",
                    url: ""
                },    
                {
                    name: "Mini Puzzle",
                    desc: "A mobile jigsaw puzzle game available for Android and Windows Phone",
                    tags: ["Cordova", "HTML5", "CSS3", "JavaScript", "jQuery", "Game"],
                    img: "assets/img/mini-puzzle/mini-puzzle.png",
                    url: ""
                },            
                {
                    name: "Web 1",
                    desc: "Demo game created with my game framework CXGF",
                    tags: ["HTML", "CSS", "JavaScript", "CXGF - Codotronix Game Framework", "Game"],
                    img: "assets/img/tankgular/tankgular.png",
                    url: ""
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
            ]
        }
    ];
}
