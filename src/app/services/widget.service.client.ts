import {Injectable} from '@angular/core';
import {Widget} from '../model/widget.model.client';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';


@Injectable()
export class WidgetService {

  constructor(private http: HttpClient) {}


  api = { 'createWidget' : this.createWidget,
    'findWidgetsByPageId' : this.findWidgetsByPageId,
    'findWidgetById' : this.findWidgetById,
    'updateWidget' : this.updateWidget,
    'deleteWidget' : this.deleteWidget
  };

  baseUrl = environment.baseUrl;

  createWidget(pageId, widget)   {
    const newWidget = {name: widget.name, widgetType: widget.widgetType, pageId: pageId};
    return this.http.post(this.baseUrl + '/api/page/' + pageId + '/widget', newWidget).pipe(
      map((response) => {
        return response;
      }));
  }

  findWidgetsByPageId(pageId)  {
    return this.http.get<Array<Widget>>(this.baseUrl + '/api/page/' + pageId + '/widget').pipe(
      map((response) => {
        return response;
      }));
  }

  findWidgetById(widgetId)   {
    console.log('send wgid:' + widgetId);
    return this.http.get<Widget>(this.baseUrl + '/api/widget/' + widgetId).pipe(
      map((response) => {
        return response;
      }));
  }
  updateWidget(widgetId, widget)   {
    return this.http.put(this.baseUrl + '/api/widget/' + widgetId, widget).pipe(
      map((response) => {
        return response;
      }));
  }

  deleteWidget(widgetId) {
    return this.http.delete(this.baseUrl + '/api/widget/' + widgetId).pipe(
      map((response) => {
        return response;
      }));
  }

  reorderWidgets(startIndex, endIndex, pageId) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
    return this.http.put(url, '', {responseType: 'text'});
  }
}
