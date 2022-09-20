import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpenApiInterface } from 'src/app/interfaces/openapi';
import { ApisService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-update-api',
  templateUrl: './update-api.component.html',
  styleUrls: ['./update-api.component.css'],
})
export class UpdateApiComponent implements OnInit {
  name: string = '';
  description: string = '';
  auth: string = '';
  cors: string = '';
  link: string = '';
  https: boolean = false;
  category: string = '';
  apiName: string | null;

  constructor(private apisService: ApisService, private route: ActivatedRoute) {
    this.apiName = route.snapshot.paramMap.get('name');
  }

  ngOnInit(): void {
    this.apisService.getOpenApis().subscribe((apis) => {
      // @ts-ignore
      const api: OpenApiInterface = apis.entries.find(
        (api: OpenApiInterface) => api.API === this.apiName
      );

      this.name = api.API;
      this.description = api.Description;
      this.category = api.Category;
      this.link = api.Link;
      this.https = api.HTTPS;
      this.auth = api.API;
      this.cors = api.Cors;
    });
  }

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

    // @ts-ignore
    this.apisService.updateApi(apiData).subscribe(() => {
      // after success update navigate to api details page
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
