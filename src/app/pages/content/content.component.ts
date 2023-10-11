import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  postPicture: string = '';
  @Input()
  postTitle: string = '';
  @Input()
  postText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
