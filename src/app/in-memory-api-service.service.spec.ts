import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { InMemoryApiServiceService } from './in-memory-api-service.service';

describe('InMemoryApiServiceService', () => {
  let service: InMemoryApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(InMemoryApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
