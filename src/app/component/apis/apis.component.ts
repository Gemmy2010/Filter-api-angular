import { Component, OnInit } from '@angular/core';
import { OpenApiInterface } from 'src/app/interfaces/openapi';
import { ApisService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.css'],
})
export class ApisComponent implements OnInit {
  apis: OpenApiInterface[] = [];

  loading: boolean = true;

  searchString: string = '';

  openApis: OpenApiInterface[] = [];

  constructor(private apisService: ApisService) {
    this.apisService.getOpenApis().subscribe((apis) => {
      //@ts-ignore
      this.apis = apis.entries;

      this.openApis = this.apis;

      this.loading = false;
    });
  }

  ngOnInit(): void {}

  searchApis(searchText: any): any {
    if (searchText === '') {
      this.openApis = this.apis;
    }

    this.searchString = searchText;

    let searchReg = new RegExp(searchText, 'i');

    let newOpenApis = this.openApis.filter(
      (api: OpenApiInterface) =>
        searchReg.test(api.API) ||
        searchReg.test(api.Description) ||
        searchReg.test(api.Category)
    );

    this.openApis = newOpenApis;
  }

  filterApis(data: any) {
    switch (data.type) {
      case 'https':
        this.openApis = this.openApis.filter(
          (api: OpenApiInterface) => api.HTTPS.toString() === data.value
        );

        break;
      case 'auth':
        this.openApis = this.openApis.filter(
          (api: OpenApiInterface) => api.Auth === data.value
        );
        break;

      case 'cors':
        this.openApis = this.openApis.filter(
          (api: OpenApiInterface) => api.Cors === data.value
        );
        break;
      default:
        this.openApis = this.openApis;
    }
  }

  sortApis(event: any) {
    const sortOrder = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    switch (event) {
      case 'HTTPS':
        this.openApis = this.openApis.sort(
          (api: OpenApiInterface, second) =>
            Number(api.HTTPS) - Number(second.HTTPS)
        );
        break;
      case 'Name':
        this.openApis = this.openApis.sort((api: OpenApiInterface, second) =>
          // @ts-ignore
          api.API.localeCompare(sortOrder.toLocaleLowerCase())
        );
        break;
      default:
        console.log(event);
        this.openApis = this.openApis.sort((api: OpenApiInterface, second) =>
          // @ts-ignore
          api[event].localeCompare(sortOrder.toLocaleLowerCase())
        );
    }
  }
}
