import { Component } from '@angular/core';
import { CommentService } from './comment.service';
import { ActivatedRoute } from '@angular/router';
import { map, pluck } from 'rxjs';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  //comments$ = this.commentService.getRooms();
  comments$ = this.activatedRoute.data.pipe(map((data)=>data['comments']))
  constructor(private commentService:CommentService,private activatedRoute:ActivatedRoute){}
}
