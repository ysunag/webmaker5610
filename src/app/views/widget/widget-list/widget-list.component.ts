import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import { DomSanitizer } from '@angular/platform-browser';
import {Widget} from '../../../model/widget.model.client';
import {PageService} from '../../../services/page.service.client';




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

  constructor(private router: ActivatedRoute, private widgetService: WidgetService, private pageService: PageService, private sanitizer: DomSanitizer) {
    this.widgets = new Array<Widget>();
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.pid = params['pid'];
      // this.widgetService.findWidgetsByPageId(params['pid']).subscribe((widgets: any) => {
      //   if (widgets) {
      //     this.widgets = widgets;
      //   }
      // });
      this.pageService.findPageById(params['pid']).subscribe((page: any) => {
        if (page) {
          this.widgets = page.widgets;
        }
      });
      console.log('user id: ' + this.uid);
      console.log('web id: ' + this.wid);
      console.log('page id: ' + this.pid);
      console.log(this.widgets);
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


  reorderWidgets(indexes) {
    this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pid)
      .subscribe(
        (data) => console.log(data)
      );
  }
}
