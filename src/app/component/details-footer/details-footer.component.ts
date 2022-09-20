import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OpenApiInterface } from 'src/app/interfaces/openapi';

@Component({
  selector: 'app-details-footer',
  templateUrl: './details-footer.component.html',
  styleUrls: ['./details-footer.component.css'],
})
export class DetailsFooterComponent implements OnInit {
  // @ts-ignore
  @Input() details: OpenApiInterface;

  @Output() deleteAPI: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDeleteApi(apiName: any): void {
    this.deleteAPI.emit(apiName);
  }
}
