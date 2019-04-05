import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../../model/widget.model.client';
import {WidgetService} from '../../../../../services/widget.service.client';
import {FlickrService} from '../../../../../services/flickr.service.client';


@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {
  wid: String;
  pid: String;
  searchText: String;
  photos: Array<any>;
  widget: Widget;
  error: string;
  constructor(private router: Router, private activatedRouter: ActivatedRoute, private flickrService: FlickrService,
              private widgetService: WidgetService) {
    this.photos = new Array<any>();
    this.widget = new Widget('', '', '', '');
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.wid = params['wid'];
      this.pid = params['pid'];
      this.widgetService.findWidgetById(params['wgid']).subscribe((widget: any) => {
        if (widget) {
          this.widget = widget;
        }
      },
        (error: any) => console.log(error));
      console.log('widget id: ' + this.widget._id);
    });
  }

  searchPhotos() {
    this.flickrService
      .searchPhotos(this.searchText)
      .subscribe(
        (data: any) => {
          // let val = data._body;
          // val = val.replace('jsonFlickrApi(', '');
          // val = val.substring(0, val.length - 1);
          // val = JSON.parse(val);
          this.photos = data.photos;
         // this.photos = val.photos;
        }
      );
  }

  selectPhoto(photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
    this.widget.url = url;

    console.log( 'flickr: ' + url);
    this.widgetService
      .updateWidget(this.widget._id, this.widget)
      .subscribe(
        (data: any) => {
          const result = data;
          if (result) {
            this.router.navigate(['/#/website/' + this.wid + '/page/' + this.pid + '/widget/' + this.widget._id] );
          } else {
            this.error = 'failed!';
          }
        }
      );
  }


  }
