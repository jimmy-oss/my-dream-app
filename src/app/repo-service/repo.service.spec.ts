import { TestBed } from '@angular/core/testing';

import { Repo } from './repo.service';

describe('RepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Repo = TestBed.get(Repo);
    expect(service).toBeTruthy();
  });
});