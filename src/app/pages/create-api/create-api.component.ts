import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-create-api',
  templateUrl: './create-api.component.html',
  styleUrls: ['./create-api.component.css'],
})
export class CreateApiComponent implements OnInit {
  constructor(private apisService: ApisService) {}

  name: string = '';
  description: string = '';
  auth: string = '';
  cors: string = '';
  link: string = '';
  https: boolean = false;
  category: string = '';

  ngOnInit(): void {}

  onSubmit() {
    const apiData = {
      name: this.name,
      description: this.description,
      auth: this.auth,
      cors: this.cors,
      category: this.category,
      https: this.https,
      link: this.link,
    };

    this.apisService.createApi(apiData).subscribe((api) => {
      // after successfully creation navigate to home page
    });

    // clear infomation after submission
    this.name = '';
    this.description = '';
    this.auth = '';
    this.cors = '';
    this.category = '';
    this.https = false;
    this.link = '';
  }
}
