import { switchMap } from 'rxjs/operators';
import { PostsService } from './../shared/posts.service';
import { Post } from 'src/app/shared/interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  post$:Observable<Post>

  constructor(private route:ActivatedRoute, private postsService:PostsService) { }

  ngOnInit(): void {
    this.post$ = this.route.params
      .pipe(switchMap((params: Params)=> {
      return this.postsService.getById(params['id'])
    }))
  }

}
