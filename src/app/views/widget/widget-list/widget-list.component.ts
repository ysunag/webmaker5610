import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import { DomSanitizer } from '@angular/platform-browser';

export class Widget {
  name: String;
  _id: String;
  widgetType: String;
  pageId: String;
  size?: number;
  width?: String;
  text?: String;
  url?: String;
  file?: File;
  constructor(name, _id, widgetType, pageId) {
    this.name = name;
    this._id = _id;
    this.widgetType = widgetType;
    this.pageId = pageId;
  }
}



@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  uid: String;
  wid: String;
  pid: String;
  widgets: Array<Widget>;

  constructor(private router: ActivatedRoute, private widgetService: WidgetService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.pid = params['pid'];
      this.widgets = this.widgetService.findWidgetsByPageId(params['pid']);
      console.log('user id: ' + this.uid);
      console.log('web id: ' + this.wid);
      console.log('page id: ' + this.pid);
    });
  }

  getSafeUrl(widget) {
    console.log(widget.url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(widget.url);
  }

  getHeading(widget) {
    console.log(widget.text);
    console.log(widget.size);
    const heading = '<h' + widget.size + '>' + widget.text + '</h' + widget.size + '>';
    console.log(heading);
    return heading;
  }
}
