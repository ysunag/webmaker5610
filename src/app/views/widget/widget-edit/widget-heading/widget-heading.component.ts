import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget} from '../../../../model/widget.model.client';


@Component({
  selector: 'app-widget-heading',
  templateUrl: './widget-heading.component.html',
  styleUrls: ['./widget-heading.component.css']
})
export class WidgetHeadingComponent implements OnInit {
  wid: String;
  pid: String;
  widget: Widget;

  errorFlag: boolean;
  errorMsg = 'Invalid widget name!';

  constructor(private activeRouter: ActivatedRoute, private widgetService: WidgetService, private router: Router) {
    this.widget = new Widget('', '', '', '');
  }

  ngOnInit() {
    this.activeRouter.params.subscribe(params => {
      this.wid = params['wid'];
      this.pid = params['pid'];
      this.widgetService.findWidgetById(params['wgid']).subscribe((widget: any) => {
        if (widget) {
          this.widget = widget;
        }
      });
      console.log('widget id: ' + this.widget._id);
      console.log('web id: ' + this.wid);
    });
  }

  UpdateWidget() {
    console.log(this.widget.name);
    console.log(this.widget.text);
    console.log(this.widget.size);
    if (this.widget.name.length < 1 ) {
      this.errorFlag = true;
    } else {
      this.activeRouter.params.subscribe(params => {
        return this.widgetService.updateWidget(this.widget._id, this.widget)
          .subscribe((widget: any) => {
              this.router.navigate(['website' , this.wid, 'page', this.pid, 'widget']);
            }
            ,
            (error) => {
              if (error) {
                this.errorMsg = error;
                console.log(error);
                this.errorFlag = true;
              }
            });
      });
    }
  }

  DeleteWidget() {
    console.log(this.widget.name);
    console.log(this.widget.text);
    console.log(this.widget.size);
    this.activeRouter.params.subscribe(params => {
      return this.widgetService.deleteWidget(this.widget._id)
        .subscribe((widgets: any) => {});
    });
  }

}
