import { TestBed } from '@angular/core/testing';

import { BookShelfDataService } from './book-shelf-data.service';

describe('BookShelfDataService', () => {
  let service: BookShelfDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookShelfDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
