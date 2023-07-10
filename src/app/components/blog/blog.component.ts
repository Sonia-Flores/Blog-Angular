import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { New } from 'src/app/interfaces/inew.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
 //declaraciones
  arrNews : New[] = [];
  formBlog: FormGroup;
  submited: boolean = false;

  constructor() {
    //inicializaciones
    //Noticias predefinidas
    this.arrNews = [
      {
          title: "Un juez limita el contacto entre el Gobierno de Biden y las redes sociales",
          img_url: "https://imagenes.elpais.com/resizer/w-3pThdVOZWej2HyqwGbUSsW-bU=/828x466/cloudfront-eu-central-1.images.arcpublishing.com/prisa/BLM5ESICP7ZO7OBLWJDG2EI5UQ.jpg",
          body_new: "La resolución impide a las autoridades sanitarias, al Departamento de Justicia, el FBI y otros órganos interactuar con las plataformas aunque sea para evitar desinformación",
          date: new Date
      },
      {
        title: "Pedro Sánchez se entrevista a sí mismo",
        img_url: "https://imagenes.elpais.com/resizer/ytt56ySw-gQ4WBdyoHWQuNLAmLU=/1200x0/filters:focal(1325x708:1335x718)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/5YNT4XPKWNOUJ3O2YVZWKPNTZM.jpg",
        body_new: "Las entrevistas a la contra son más ilustrativas, y se espera que más útiles para movilizar al electorado remolón",
        date: new Date
      }
    
    ]
    //Formulario y validadores
    this.formBlog = new FormGroup({
      title: new FormControl('', [
        Validators.required
      ]),
      img_url: new FormControl('', [
        Validators.required,
      ]),
      body_new: new FormControl('', [
        Validators.required
      ]),
      date: new FormControl('', [
        Validators.required
      ]),
    })

  }

  onSubmit(){
    this.submited = true;

    //comprobación de datos e inserción en array
    if(this.formBlog.invalid){
      return;
    } else {
      this.arrNews.push({
        title: this.formBlog.value.title,
        img_url: this.formBlog.value.img_url,
        body_new: this.formBlog.value.body_new,
        date: this.formBlog.value.date
      })

      this.submited = false;
      this.formBlog.reset();
    }
  }


}
