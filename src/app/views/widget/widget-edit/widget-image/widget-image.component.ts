import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget} from '../../../../model/widget.model.client';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

  uid: String;
  wid: String;
  pid: String;
  widget: Widget;

  constructor(private router: ActivatedRoute, private widgetService: WidgetService) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.pid = params['pid'];
      this.widget = this.widgetService.findWidgetById(params['wgid']);
      console.log('user id: ' + this.uid);
      console.log('widget id: ' + this.widget._id);
      console.log('web id: ' + this.wid);
    });
  }

  UpdateWidget() {
    console.log(this.widget.name);
    console.log(this.widget.text);
    console.log(this.widget.size);
    this.widgetService.updateWidget(this.widget._id, this.widget);
  }

  DeleteWidget() {
    console.log(this.widget.name);
    console.log(this.widget.text);
    console.log(this.widget.size);
    this.widgetService.deleteWidget(this.widget._id);

  }

}
