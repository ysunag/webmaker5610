import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {Page} from '../../../model/page.model.client';
import {Widget} from '../../../model/widget.model.client';


@Component({
  selector: 'app-widget-choose',
  templateUrl: './widget-choose.component.html',
  styleUrls: ['./widget-choose.component.css']
})
export class WidgetChooseComponent implements OnInit {

  uid: String;
  wid: String;
  pid: Page;
  widget: Widget;

  constructor(private router: ActivatedRoute, private widgetService: WidgetService) {
    this.widget = new Widget('', '', '', '');
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.pid = params['pid'];
      console.log('user id: ' + this.uid);
      console.log('web id: ' + this.wid);
      console.log('page id: ' + this.pid);
      this.widget.size = 1;
      this.widgetService.createWidget(this.pid, this.widget).subscribe((widget: any) => {
        if (widget) {
          this.widget = widget;
        }
      });
    });
  }

  updateWidgetType(widgetType) {
    this.widget.widgetType = widgetType;
    this.router.params.subscribe(params => {
      return this.widgetService.updateWidget(this.widget._id, this.widget).subscribe((widgets: any) => {
      });
    });
  }

}
