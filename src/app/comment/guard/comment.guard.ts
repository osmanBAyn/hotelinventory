import { CanActivateFn, ResolveFn } from '@angular/router';
import { CommentService } from '../comment.service';
import { inject } from '@angular/core';
import { Comments } from '../comment';

export const commentGuard: ResolveFn<Comments[]> = (route, state) => {
  const commentService = inject(CommentService);
  return commentService.getRooms();
};
