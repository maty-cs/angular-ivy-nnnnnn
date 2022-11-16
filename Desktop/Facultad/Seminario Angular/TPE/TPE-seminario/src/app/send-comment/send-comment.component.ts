import { Component, Input, OnInit } from '@angular/core';
import { Comments } from '../comments/mock-comments';
import { InputCommentService } from '../input-comment.service';

@Component({
  selector: 'app-send-comment',
  templateUrl: './send-comment.component.html',
  styleUrls: ['./send-comment.component.scss']
})
export class SendCommentComponent implements OnInit {
  
  @Input() user!: string;
  @Input() resenia!: string;

  constructor(private comentario: InputCommentService) { 
  }
  
  ngOnInit(): void {
  }

  addComment(comment: Comments): void{
    if((comment.user!="" && comment.user!=null && comment.user!=undefined) && (comment.resenia!="" && comment.resenia!=null && comment.resenia!=undefined)) {
      this.comentario.agregarComentario(comment)
    }
    else{
      alert("Campos de comentario invalidos")
    }
  }

}
