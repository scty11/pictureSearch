import { ImageService } from './../shared/image.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  images: any[];
  searchQuery: string;
  imagesFound = false;
  searching = false;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }
  handleSuccess(data) {
    this.imagesFound = true;
    this.images = data.hits;
    console.log(data);
  }

  searchImages(query: string) {
    this.searching = true;
    return this.imageService.getImage(query)
    .subscribe(data => this.handleSuccess(data),
               error => console.log(error),
               () => this.searching = false);
  }

}
