import { TestBed, inject } from '@angular/core/testing';

import { QstService } from './qst.service';

describe('QstService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QstService]
    });
  });

  it('should be created', inject([QstService], (service: QstService) => {
    expect(service).toBeTruthy();
  }));
});
