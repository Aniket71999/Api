import { Component, OnInit } from '@angular/core';
import { FetchdataService } from '../fetchdata.service';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {
  public data: any;
  constructor(private _fetchDataService: FetchdataService) {}

  ngOnInit(): void {
    this._fetchDataService.getdata().subscribe((result) => {
      this.data = result;
      console.log(this.data);
    });
  }
}
