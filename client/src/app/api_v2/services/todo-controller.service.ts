/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Todo } from '../models/todo';
@Injectable({
  providedIn: 'root',
})
class TodoControllerService extends __BaseService {
  static readonly TodoControllerFindPath = '/todos';
  static readonly TodoControllerUpdateAllPath = '/todos';
  static readonly TodoControllerCreatePath = '/todos';
  static readonly TodoControllerCountPath = '/todos/count';
  static readonly TodoControllerDeleteByIdPath = '/todos/{id}';
  static readonly TodoControllerFindByIdPath = '/todos/{id}';
  static readonly TodoControllerUpdateByIdPath = '/todos/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param filter undefined
   * @return Array of Todo model instances
   */
  TodoControllerFindResponse(filter?: {}): __Observable<__StrictHttpResponse<Array<Todo>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (filter != null) __params = __params.set('filter', filter.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/todos`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Todo>>;
      })
    );
  }
  /**
   * @param filter undefined
   * @return Array of Todo model instances
   */
  TodoControllerFind(filter?: {}): __Observable<Array<Todo>> {
    return this.TodoControllerFindResponse(filter).pipe(
      __map(_r => _r.body as Array<Todo>)
    );
  }

  /**
   * @param params The `TodoControllerService.TodoControllerUpdateAllParams` containing the following parameters:
   *
   * - `where`:
   *
   * - `body`:
   *
   * @return Todo PATCH success count
   */
  TodoControllerUpdateAllResponse(params: TodoControllerService.TodoControllerUpdateAllParams): __Observable<__StrictHttpResponse<{count?: number}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.where != null) __params = __params.set('where', params.where.toString());
    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/todos`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{count?: number}>;
      })
    );
  }
  /**
   * @param params The `TodoControllerService.TodoControllerUpdateAllParams` containing the following parameters:
   *
   * - `where`:
   *
   * - `body`:
   *
   * @return Todo PATCH success count
   */
  TodoControllerUpdateAll(params: TodoControllerService.TodoControllerUpdateAllParams): __Observable<{count?: number}> {
    return this.TodoControllerUpdateAllResponse(params).pipe(
      __map(_r => _r.body as {count?: number})
    );
  }

  /**
   * @param body undefined
   * @return Todo model instance
   */
  TodoControllerCreateResponse(body?: Todo): __Observable<__StrictHttpResponse<Todo>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/todos`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Todo>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Todo model instance
   */
  TodoControllerCreate(body?: Todo): __Observable<Todo> {
    return this.TodoControllerCreateResponse(body).pipe(
      __map(_r => _r.body as Todo)
    );
  }

  /**
   * @param where undefined
   * @return Todo model count
   */
  TodoControllerCountResponse(where?: {}): __Observable<__StrictHttpResponse<{count?: number}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (where != null) __params = __params.set('where', where.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/todos/count`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{count?: number}>;
      })
    );
  }
  /**
   * @param where undefined
   * @return Todo model count
   */
  TodoControllerCount(where?: {}): __Observable<{count?: number}> {
    return this.TodoControllerCountResponse(where).pipe(
      __map(_r => _r.body as {count?: number})
    );
  }

  /**
   * @param id undefined
   */
  TodoControllerDeleteByIdResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/todos/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  TodoControllerDeleteById(id: number): __Observable<null> {
    return this.TodoControllerDeleteByIdResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   * @return Todo model instance
   */
  TodoControllerFindByIdResponse(id: number): __Observable<__StrictHttpResponse<Todo>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/todos/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Todo>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Todo model instance
   */
  TodoControllerFindById(id: number): __Observable<Todo> {
    return this.TodoControllerFindByIdResponse(id).pipe(
      __map(_r => _r.body as Todo)
    );
  }

  /**
   * @param params The `TodoControllerService.TodoControllerUpdateByIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   */
  TodoControllerUpdateByIdResponse(params: TodoControllerService.TodoControllerUpdateByIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/todos/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `TodoControllerService.TodoControllerUpdateByIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   */
  TodoControllerUpdateById(params: TodoControllerService.TodoControllerUpdateByIdParams): __Observable<null> {
    return this.TodoControllerUpdateByIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module TodoControllerService {

  /**
   * Parameters for TodoControllerUpdateAll
   */
  export interface TodoControllerUpdateAllParams {
    where?: {};
    body?: Todo;
  }

  /**
   * Parameters for TodoControllerUpdateById
   */
  export interface TodoControllerUpdateByIdParams {
    id: number;
    body?: Todo;
  }
}

export { TodoControllerService }
