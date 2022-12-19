import { TestBed } from '@angular/core/testing';

import { ImageRouterService } from './image-router.service';

describe('ImageRouterService', () => {
  let service: ImageRouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageRouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
