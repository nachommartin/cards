import { TestBed } from '@angular/core/testing';

import { CardgameService } from './cardgame.service';

describe('CardgameService', () => {
  let service: CardgameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardgameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
