import { Component, Input, OnInit } from '@angular/core';
import { OpenApiInterface } from 'src/app/interfaces/openapi';

@Component({
  selector: 'app-api-item',
  templateUrl: './api-item.component.html',
  styleUrls: ['./api-item.component.css'],
})
export class ApiItemComponent implements OnInit {
  @Input() openApi: OpenApiInterface;
  constructor() {
    this.openApi = {
      API: '',
      Description: '',
      Auth: '',
      HTTPS: false,
      Cors: '',
      Link: '',
      Category: '',
    };
  }

  ngOnInit(): void {}
}
