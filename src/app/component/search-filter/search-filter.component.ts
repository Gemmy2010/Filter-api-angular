import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OpenApiInterface } from 'src/app/interfaces/openapi';
import { ApisService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css'],
})
export class SearchFilterComponent implements OnInit {
  @Output() handleSearch: EventEmitter<any> = new EventEmitter();
  @Output() handleFilter: EventEmitter<any> = new EventEmitter();
  @Output() handleSort: EventEmitter<any> = new EventEmitter();

  sortDataBy: string[] = [
    'Name',
    'Description',
    'Auth',
    'HTTPS',
    'Cors',
    'Link',
    'Category',
  ];

  sortValue: string = '';

  cor: string = '';
  http: string = '';
  authValue: string = '';
  cors: string[] | unknown[] = [];
  https: string[] | unknown[] = [];
  auth: string[] | unknown[] = [];

  constructor(private apisService: ApisService) {
    this.apisService.getOpenApis().subscribe((apis) => {
      this.cors = [
        // @ts-ignore
        ...new Set(apis?.entries.map((api: OpenApiInterface) => api.Cors)),
      ];

      this.https = [
        // @ts-ignore
        ...new Set(apis?.entries?.map((api: OpenApiInterface) => api.HTTPS)),
      ];

      this.auth = [
        // @ts-ignore
        ...new Set(apis?.entries?.map((api: OpenApiInterface) => api.Auth)),
      ];
    });
  }

  ngOnInit(): void {}

  handleChangeEvent(event: any) {
    this.handleSearch.emit(event);
  }

  filterByCors(event: any) {
    if (event != undefined) {
      this.handleFilter.emit({ value: event, type: 'cors' });
    }
  }

  filterByAuth(event: any) {
    if (event != undefined) {
      this.handleFilter.emit({ value: event, type: 'auth' });
    }
  }

  filterByHttp(event: any) {
    if (event != undefined) {
      this.handleFilter.emit({ value: event, type: 'https' });
    }
  }

  sortApis(event: any) {
    if (event != undefined) {
      this.handleSort.emit(event);
    }
  }
}
