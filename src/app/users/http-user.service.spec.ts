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

import { HttpUserService as Userservice } from './http-user.service';

const makeUserData = () => [
  { id: 1, name: 'Teste 1', username: 'Test 1'},
  { id: 2, name: 'Teste 2', username: 'Test 2'},
  { id: 3, name: 'Teste 3', username: 'Test 3'},
  { id: 4, name: 'Teste 4', username: 'Test 4'}
] as any[];

describe('Http-Userservice (mockBackend)', () => {

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [
        Userservice,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    })
      .compileComponents();
  }));

  it('inicializado service com injetor',
    inject([Userservice], (service: Userservice) => {
      expect(service instanceof Userservice).toBe(true);
    }));



  it('inicializado service com new ', inject([Http], (http: Http) => {
    expect(http).not.toBeNull('http deve ser fornecido');
    const service = new Userservice(http);
    expect(service instanceof Userservice).toBe(true, 'new service forneciso ok');
  }));


  it('fornecer um mockBackend as XHRBackend',
    inject([XHRBackend], (backend: MockBackend) => {
      expect(backend).not.toBeNull('backend deve ser fornecido');
    }));

  describe('getUsers', () => {
    let backend: MockBackend;
    let service: Userservice;
    let fakeUsers: any[];
    let response: Response;

    beforeEach(inject([Http, XHRBackend], (http: Http, be: MockBackend) => {
      backend = be;
      service = new Userservice(http);
      fakeUsers = makeUserData();
      const options = new ResponseOptions({status: 200, body: {data: fakeUsers}});
      response = new Response(options);
    }));

    it('esperando users falsos (then)', async(inject([], () => {
      backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

      service.getUsers().then(users => {
        expect(users.data.length).toBe(fakeUsers.length,
          'podera conter numeros de Users');
      });
    })));

  });
});

