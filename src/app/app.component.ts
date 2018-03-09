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
            Heading: "Games",
            items: [
                {
                    name: "Beware of Boxes",
                    desc: "Demo game created with my game framework CXGF",
                    tags: ["HTML", "CSS", "JavaScript", "CXGF - Codotronix Game Framework", "Game"],
                    img: "",
                    url: ""
                },
                {
                    name: "Tankgular",
                    desc: "A tank battle game to demonstrate the browser responsiveness of AngularJS, where each tank is an angular directive.",
                    tags: ["AngularJS", "HTML", "CSS", "JavaScript", "Game"],
                    img: "",
                    url: ""
                },
                {
                    name: "Asteroid Attack",
                    desc: "A simple browser based game where the player needs to shoot down all the asteroids to save the day",
                    tags: ["HTML", "CSS", "JavaScript", "Game"],
                    img: "",
                    url: ""
                }
            ]
        },

        {
            Heading: "Websites",
            items: [
                {
                    name: "Web 1",
                    desc: "Demo game created with my game framework CXGF",
                    tags: ["HTML", "CSS", "JavaScript", "CXGF - Codotronix Game Framework", "Game"],
                    img: "",
                    url: ""
                },
                {
                    name: "Web 2",
                    desc: "A tank battle game to demonstrate the browser responsiveness of AngularJS, where each tank is an angular directive.",
                    tags: ["AngularJS", "HTML", "CSS", "JavaScript", "Game"],
                    img: "",
                    url: ""
                },
                {
                    name: "Web 3",
                    desc: "A simple browser based game where the player needs to shoot down all the asteroids to save the day",
                    tags: ["HTML", "CSS", "JavaScript", "Game"],
                    img: "",
                    url: ""
                },
                {
                    name: "Web 4",
                    desc: "A simple browser based game where the player needs to shoot down all the asteroids to save the day",
                    tags: ["HTML", "CSS", "JavaScript", "Game"],
                    img: "",
                    url: ""
                }
            ]
        }
    ];
}
