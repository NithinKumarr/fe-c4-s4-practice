import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageRouterService } from '../services/image-router.service';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent implements OnInit {

  image: any;
  constructor(private imageService: ImageService, private activatedRoute: ActivatedRoute, private imageRouter: ImageRouterService) { 
  }

  ngOnInit(): void {
    // code to read value of route parameter `id` and use it to fetch the corresponding image
    this.activatedRoute.paramMap.subscribe(data => {
      let id = data.get('id') ?? 0;
          this.imageService.getImage(+id).subscribe(data => {
              this.image = data;
          });
      });

  }

  delete() {
    this.imageService.deleteImage(this.image.id).subscribe(data=>{
      // code to navigate to home
      this.imageService.deleteImage(this.image.id).subscribe(data => {
        this.imageRouter.navigateToHome();     
    });

    });
  }

}
