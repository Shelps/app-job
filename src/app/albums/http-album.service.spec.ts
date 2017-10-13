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

import { HttpAlbumService as AlbumService } from './http-album.service';

const makeAlbumData = () => [
  { id: 1, body: 'Teste 1'},
  { id: 2, body: 'Teste 2'},
  { id: 3, body: 'Teste 3'},
  { id: 4, body: 'Teste 4'}
] as any[];

describe('Http-AlbumService (mockBackend)', () => {

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [
        AlbumService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    })
      .compileComponents();
  }));

  it('inicializado service com injetor',
    inject([AlbumService], (service: AlbumService) => {
      expect(service instanceof AlbumService).toBe(true);
    }));



  it('inicializado service com new ', inject([Http], (http: Http) => {
    expect(http).not.toBeNull('http deve ser fornecido');
    const service = new AlbumService(http);
    expect(service instanceof AlbumService).toBe(true, 'new service forneciso ok');
  }));


  it('fornecer um mockBackend as XHRBackend',
    inject([XHRBackend], (backend: MockBackend) => {
      expect(backend).not.toBeNull('backend deve ser fornecido');
    }));

  describe('getPosts', () => {
    let backend: MockBackend;
    let service: AlbumService;
    let fakePosts: any[];
    let response: Response;

    beforeEach(inject([Http, XHRBackend], (http: Http, be: MockBackend) => {
      backend = be;
      service = new AlbumService(http);
      fakePosts = makeAlbumData();
      const options = new ResponseOptions({status: 200, body: {data: fakePosts}});
      response = new Response(options);
    }));

    it('esperando albums falsos (then)', async(inject([], () => {
      backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

      service.getAlbums().then(posts => {
        expect(posts.data.length).toBe(fakePosts.length,
          'podera conter numeros de Albums');
      });
    })));

  });
});
