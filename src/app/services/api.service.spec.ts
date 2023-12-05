import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });

    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get user data', () => {
    const mockUserData = { username: 'testuser' };

    service.getUser('testuser').subscribe((data) => {
      expect(data).toEqual(mockUserData);
    });

    const req = httpTestingController.expectOne('apiUrl/user/testuser');
    expect(req.request.method).toEqual('GET');
    req.flush(mockUserData);
  });

  it('should get repositories', () => {
    const mockRepos = [{ name: 'repo1' }, { name: 'repo2' }];

    service.getRepos('testuser', 1, 10).subscribe((repos) => {
      expect(repos).toEqual(mockRepos);
    });

    const req = httpTestingController.expectOne('apiUrl/repos/testuser?page=1&per_page=10');
    expect(req.request.method).toEqual('GET');
    req.flush(mockRepos);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
