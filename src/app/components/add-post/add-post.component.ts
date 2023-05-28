import {Component, OnInit} from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {Router} from "@angular/router";

@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  public post = {
    title: '',
    content: '',
    url: ''
    };

  constructor(private dataService: DataService, public router: Router) {}
  
  ngOnInit(): void {}

  addpost() {
    this.dataService.addPost(this.post).subscribe((result) => {
      return result;
    });
    this.router.navigate(['/blog']);
  }
}
