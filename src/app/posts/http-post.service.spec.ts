/**
 * Created by italo on 10/13/17.
 */

import {
  async, inject, TestBed
} from '@angular/core/testing';

import {
  MockBackend,
  MockConnection
} from '@angular/http/testing';

import {
  HttpModule, Http, XHRBackend, Response, ResponseOptions
} from '@angular/http';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

import { HttpPostService as PostService } from './http-post.service';

const makePostData = () => [
  { id: 1, body: 'Teste 1', title: 'Teste 1' },
  { id: 2, body: 'Teste 2', title: 'Teste 2' },
  { id: 3, body: 'Teste 3', title: 'Teste 3' },
  { id: 4, body: 'Teste 4', title: 'Teste 4' }
] as any[];

describe('Http-PostService (mockBackend)', () => {

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [
        PostService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    })
      .compileComponents();
  }));

  it('inicializado service com injetor',
    inject([PostService], (service: PostService) => {
      expect(service instanceof PostService).toBe(true);
    }));



  it('inicializado service com new ', inject([Http], (http: Http) => {
    expect(http).not.toBeNull('http deve ser fornecido');
    const service = new PostService(http);
    expect(service instanceof PostService).toBe(true, 'new service forneciso ok');
  }));


  it('forbecer um mockBackend as XHRBackend',
    inject([XHRBackend], (backend: MockBackend) => {
      expect(backend).not.toBeNull('backend deve ser fornecido provided');
    }));

  describe('getPosts', () => {
    let backend: MockBackend;
    let service: PostService;
    let fakePosts: any[];
    let response: Response;

    beforeEach(inject([Http, XHRBackend], (http: Http, be: MockBackend) => {
      backend = be;
      service = new PostService(http);
      fakePosts = makePostData();
      const options = new ResponseOptions({status: 200, body: {data: fakePosts}});
      response = new Response(options);
    }));

    it('esperando post falsos (then)', async(inject([], () => {
      backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

      service.getPosts().then(posts => {
          expect(posts.data.length).toBe(fakePosts.length,
            'podera conter numeros de Posts');
        });
    })));

  });
});

