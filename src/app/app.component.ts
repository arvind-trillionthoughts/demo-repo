import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "cards"
  posts = [
    {
      imageUrl: "../assets/tree.jpeg",
      title: "Neat Tree",
      username:"nature",
      content:"Saw this awesome tree during my hike."
    },
    {
      imageUrl: "../assets/mountain.jpeg",
      title: "Snowy Mountain",
      username:"mountainlover",
      content:"Here is a picture of a snowy mountain."
    },
    {
      imageUrl: "../assets/biking.jpeg",
      title: "Mountain Biking",
      username:"biking1222",
      content:"I did some biking today."
    }
  ]
}
