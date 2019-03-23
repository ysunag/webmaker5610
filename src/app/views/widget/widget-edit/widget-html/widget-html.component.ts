import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget} from '../../../../model/widget.model.client';


@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {
  uid: String;
  wid: String;
  pid: String;
  widget: Widget;

  constructor(private router: ActivatedRoute, private widgetService: WidgetService) {
    this.widget = new Widget('', '', '', '');
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.pid = params['pid'];
      this.widgetService.findWidgetById(params['wgid']).subscribe((widget: any) => {
        if (widget) {
          this.widget = widget;
        }
      });
      console.log('user id: ' + this.uid);
      console.log('widget id: ' + this.widget._id);
      console.log('web id: ' + this.wid);
    });
  }

  UpdateWidget() {
    console.log(this.widget);
    this.router.params.subscribe(params => {
      return this.widgetService.updateWidget(this.widget._id, this.widget)
        .subscribe((widget: any) => {});
    });
  }

  DeleteWidget() {
    console.log(this.widget);
    this.router.params.subscribe(params => {
      return this.widgetService.deleteWidget(this.widget._id)
        .subscribe((widgets: any) => {});
    });
  }

}
