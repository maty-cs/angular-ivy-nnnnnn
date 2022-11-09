import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Comments } from './comments/mock-comments';

@Injectable({
  providedIn: 'root'
})
export class InputCommentService {

  private _ListaComentarios: Comments[] = [];

  ListaComentarios: BehaviorSubject<Comments[]> = new BehaviorSubject(this._ListaComentarios);

  agregarComentario(comment: Comments): void{
    this._ListaComentarios.push(comment);
    console.log("eh");
    this.ListaComentarios.next(this._ListaComentarios);
  }

  constructor() { }
}
