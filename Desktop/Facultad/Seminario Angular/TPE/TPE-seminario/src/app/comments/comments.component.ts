import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { InputCommentService } from '../input-comment.service';
import { Comments } from './mock-comments';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  
  comentarios: Comments[] = [
    {
      resenia: "comentario de prueba 1",
      user: "test-user",
    },
    {
      resenia: "comentario de prueba 2",
      user: "test-user2",
    },
    {
      resenia: "comentario de prueba 4",
      user: "test-user4",
    },
    {
      resenia: "comentario de prueba 3",
      user: "test-user3",
      
    },
  ]

  ListaComentarios: Comments[] = [];

  constructor(private comment: InputCommentService) {
    comment.ListaComentarios.subscribe((observable)  => this.ListaComentarios = observable);
  }

  
  ngOnInit(): void {
    
  }


}
