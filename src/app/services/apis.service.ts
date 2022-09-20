import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OpenApiInterface } from '../interfaces/openapi';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ApisService {
  private apiUlr = 'https://api.publicapis.org/entries';

  constructor(private httpClient: HttpClient) {}

  getOpenApis(): Observable<OpenApiInterface[]> {
    return this.httpClient.get<OpenApiInterface[]>(this.apiUlr);
  }

  deleteApi(id: any): Observable<OpenApiInterface> {
    const deleteUlr = `${this.apiUlr}/${id}`;
    return this.httpClient.delete<OpenApiInterface>(deleteUlr);
  }
  updateApi(apiData: OpenApiInterface): Observable<OpenApiInterface> {
    const updateUrl = `${this.apiUlr}/${apiData.API}`;
    return this.httpClient.put<OpenApiInterface>(
      updateUrl,
      apiData,
      httpOptions
    );
  }

  createApi(apiData: any): Observable<OpenApiInterface> {
    return this.httpClient.post<OpenApiInterface>(
      this.apiUlr,
      apiData,
      httpOptions
    );
  }
}
