import { MenuTitleComponent } from './../../menu-title/menu-title.component';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeData } from 'src/app/data/fakeData';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  @Input()
  postPicture: string = '';
  @Input()
  postTitle: string = '';
  @Input()
  postText: string = '';

  @Input()
  coverPicture: string = '';

    private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => this.id = value.get("id"))
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = fakeData.filter(arcticle => arcticle.id == id)[0]

    this.postTitle = result.title
    this.postText = result.text
    this.postPicture = result.picture

  }
}
