import { TestBed } from '@angular/core/testing';

import { AuthentificactionService } from './authentificaction.service';

describe('AuthentificactionService', () => {
  let service: AuthentificactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentificactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
