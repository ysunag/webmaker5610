import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {Widget} from '../../../model/widget.model.client';


@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  wid: String;
  pid: String;
  widget: Widget;

  constructor(private router: ActivatedRoute, private widgetService: WidgetService) {
    this.widget = new Widget('', '', '', '');
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.wid = params['wid'];
      this.pid = params['pid'];
      console.log('wgid: ' + params['wgid']);
      this.widgetService.findWidgetById(params['wgid']).subscribe((widget: any) => {
          this.widget = widget;
          console.log('widget: ' + widget);
      });
      console.log('web id: ' + this.wid);
      console.log('widget id: ' + this.widget._id);
    });
  }

}
