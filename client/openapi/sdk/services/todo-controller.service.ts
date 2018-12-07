/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Todo } from '../models/todo';
@Injectable({
  providedIn: 'root',
})
class TodoControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param filter undefined
   * @return Array of Todo model instances
   */
  getTodosResponse(filter?: {}): Observable<StrictHttpResponse<Array<Todo>>> {
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
        return _r as StrictHttpResponse<Array<Todo>>;
      })
    );
  }
  /**
   * @param filter undefined
   * @return Array of Todo model instances
   */
  getTodos(filter?: {}): Observable<Array<Todo>> {
    return this.getTodosResponse(filter).pipe(
      __map(_r => _r.body as Array<Todo>)
    );
  }

  /**
   * @param params The `TodoControllerService.PatchTodosParams` containing the following parameters:
   *
   * - `where`:
   *
   * - `body`:
   *
   * @return Todo PATCH success count
   */
  patchTodosResponse(params: TodoControllerService.PatchTodosParams): Observable<StrictHttpResponse<{count: number}>> {
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
        return _r as StrictHttpResponse<{count: number}>;
      })
    );
  }
  /**
   * @param params The `TodoControllerService.PatchTodosParams` containing the following parameters:
   *
   * - `where`:
   *
   * - `body`:
   *
   * @return Todo PATCH success count
   */
  patchTodos(params: TodoControllerService.PatchTodosParams): Observable<{count: number}> {
    return this.patchTodosResponse(params).pipe(
      __map(_r => _r.body as {count: number})
    );
  }

  /**
   * @param body undefined
   * @return Todo model instance
   */
  postTodosResponse(body?: Todo): Observable<StrictHttpResponse<Todo>> {
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
        return _r as StrictHttpResponse<Todo>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Todo model instance
   */
  postTodos(body?: Todo): Observable<Todo> {
    return this.postTodosResponse(body).pipe(
      __map(_r => _r.body as Todo)
    );
  }

  /**
   * @param where undefined
   * @return Todo model count
   */
  getTodosCountResponse(where?: {}): Observable<StrictHttpResponse<{count: number}>> {
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
        return _r as StrictHttpResponse<{count: number}>;
      })
    );
  }
  /**
   * @param where undefined
   * @return Todo model count
   */
  getTodosCount(where?: {}): Observable<{count: number}> {
    return this.getTodosCountResponse(where).pipe(
      __map(_r => _r.body as {count: number})
    );
  }

  /**
   * @param id undefined
   */
  deleteTodosIdResponse(id: number): Observable<StrictHttpResponse<null>> {
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
        return _r as StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  deleteTodosId(id: number): Observable<null> {
    return this.deleteTodosIdResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   * @return Todo model instance
   */
  getTodosIdResponse(id: number): Observable<StrictHttpResponse<Todo>> {
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
        return _r as StrictHttpResponse<Todo>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Todo model instance
   */
  getTodosId(id: number): Observable<Todo> {
    return this.getTodosIdResponse(id).pipe(
      __map(_r => _r.body as Todo)
    );
  }

  /**
   * @param params The `TodoControllerService.PatchTodosIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   */
  patchTodosIdResponse(params: TodoControllerService.PatchTodosIdParams): Observable<StrictHttpResponse<null>> {
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
        return _r as StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `TodoControllerService.PatchTodosIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   */
  patchTodosId(params: TodoControllerService.PatchTodosIdParams): Observable<null> {
    return this.patchTodosIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module TodoControllerService {

  /**
   * Parameters for patchTodos
   */
  export interface PatchTodosParams {
    where?: {};
    body?: Todo;
  }

  /**
   * Parameters for patchTodosId
   */
  export interface PatchTodosIdParams {
    id: number;
    body?: Todo;
  }
}

export { TodoControllerService }
