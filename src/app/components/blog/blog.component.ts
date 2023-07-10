import { Component } from '@angular/core';
import { New } from 'src/app/interfaces/inew.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
 
  arrNews : New[] = [];

  constructor() {
    this.arrNews = [
      {
          title: "Ángel se olvida de su pelo verde",
          img_url: "https://via.placeholder.com/600/92c952",
          body_new: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur mollitia amet nam necessitatibus dolorem voluptatem quia illo dolores, unde excepturi id enim aut molestias, cumque, voluptatibus quo minus omnis? Ratione alias, molestiae provident amet facilis quia, debitis adipisci cupiditate, beatae nam temporibus sit? Perspiciatis amet, laboriosam voluptatum necessitatibus sit fugiat.",
          date: new Date
      },
      {
        title: "Ángel se olvida de su pelo verde",
        img_url: "https://via.placeholder.com/600/92c952",
        body_new: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur mollitia amet nam necessitatibus dolorem voluptatem quia illo dolores, unde excepturi id enim aut molestias, cumque, voluptatibus quo minus omnis? Ratione alias, molestiae provident amet facilis quia, debitis adipisci cupiditate, beatae nam temporibus sit? Perspiciatis amet, laboriosam voluptatum necessitatibus sit fugiat.",
        date: new Date
      }
    
    ]
  }


}
