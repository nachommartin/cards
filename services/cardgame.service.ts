import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnsplashQuery } from 'src/app/Interfaces/unsplash-query.interface';

@Injectable({
  providedIn: 'root'
})
export class CardgameService {

  url: string="";

  idkey: string= "zrX6EzUldXjwO5xDiEVCiq-3lfpK1Xf8tOVeY7ixAIM";

  imagenes: string[]=[];

  constructor(private http : HttpClient) { }

  buscarImagenes(query:string){
    this.url=`api.unsplash.com/search/photos?client_id=${this.idkey}&query=`+query+`limit=5`;
    this.getImagenes();

  }


  getImagenes(){
    this.http.get<UnsplashQuery>(this.url).subscribe((resp)=>{
      resp.results.forEach(image =>{
        this.imagenes.push(image.id);
      })
      
    })
  }
}

