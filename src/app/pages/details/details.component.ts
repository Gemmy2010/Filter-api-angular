import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpenApiInterface } from 'src/app/interfaces/openapi';
import { ApisService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  loading: boolean = true;
  apiName: string | null;
  details: any;
  constructor(private route: ActivatedRoute, private apiService: ApisService) {
    this.apiName = route.snapshot.paramMap.get('name');
  }

  ngOnInit(): void {
    if (this.apiName) {
      this.apiService.getOpenApis().subscribe((apis) => {
        // @ts-ignore
        this.details = apis.entries?.find(
          (api: OpenApiInterface) => api.API === this.apiName
        );

        this.loading = false;
      });
    }
  }

  deleteApi(apiName: string) {
    this.apiService.deleteApi(apiName).subscribe(() => {
      // after successfull deletion navigate to home page
    });
  }
}
