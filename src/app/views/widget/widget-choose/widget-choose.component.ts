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
  wid: String;
  pid: Page;
  wgid: String;
  widget: Widget;

  constructor(private router: ActivatedRoute, private widgetService: WidgetService) {
    this.widget = new Widget('', '', 'HEADING', '');
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.wid = params['wid'];
      this.pid = params['pid'];
      console.log('web id: ' + this.wid);
      console.log('page id: ' + this.pid);
      this.widget.size = 1;
      this.widgetService.createWidget(this.pid, this.widget).subscribe((widget: Widget) => {
        console.log(widget.toString());
        if (widget) {
          console.log(widget);
          this.widget = widget;
          this.wgid = widget._id.toString();
        }
      });
    });
  }

  updateWidgetType(widgetType) {
    this.widget.widgetType = widgetType;
    console.log('widget type is ' + this.widget.widgetType);
    this.router.params.subscribe(params => {
      console.log('going to update widget: id = ' + this.widget._id.toString());
      return this.widgetService.updateWidget(this.widget._id, this.widget).subscribe((widgets: any) => {
      });
    });
  }

}
