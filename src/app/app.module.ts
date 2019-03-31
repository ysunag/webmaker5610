import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/user/login/login.component';
import { RegisterComponent } from './views/user/register/register.component';
import { ProfileComponent } from './views/user/profile/profile.component';
import {FormsModule} from '@angular/forms';
import { PageListComponent } from './views/page/page-list/page-list.component';
import { PageNewComponent } from './views/page/page-new/page-new.component';
import { PageEditComponent } from './views/page/page-edit/page-edit.component';
import { WebsiteNewComponent } from './views/website/website-new/website-new.component';
import { WebsiteEditComponent } from './views/website/website-edit/website-edit.component';
import { WebsiteListComponent } from './views/website/website-list/website-list.component';
import { WidgetChooseComponent } from './views/widget/widget-choose/widget-choose.component';
import { WidgetHeadingComponent } from './views/widget/widget-edit/widget-heading/widget-heading.component';
import { WidgetImageComponent } from './views/widget/widget-edit/widget-image/widget-image.component';
import { WidgetListComponent } from './views/widget/widget-list/widget-list.component';
import { WidgetYoutubeComponent } from './views/widget/widget-edit/widget-youtube/widget-youtube.component';
import { WidgetEditComponent } from './views/widget/widget-edit/widget-edit.component';
import {UserService} from './services/user.service.client';
import {WebsiteService} from './services/website.service.client';
import {PageService} from './services/page.service.client';
import {WidgetService} from './services/widget.service.client';
import { ChangeBgColorDirective } from './directives/change-bg-color.directive';
import { SortableDirective } from './directives/sortable-directive.directive';
import {HttpClientModule} from '@angular/common/http';
import {SafePipe} from './views/widget/widget-list/safe-pipe.pipe';
import {OrderByPipe} from './views/widget/widget-list/order-by-pipe.pipe';
import { FlickrImageSearchComponent } from './views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';
import {FlickrService} from './services/flickr.service.client';
import { WidgetHtmlComponent } from './views/widget/widget-edit/widget-html/widget-html.component';
import { WidgetTextComponent } from './views/widget/widget-edit/widget-text/widget-text.component';
import { QuillEditorModule } from 'ngx-quill-editor';
import {SharedService} from './services/shared.service.client';
import {AuthGuard} from './services/auth-gard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    PageListComponent,
    PageNewComponent,
    PageEditComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    WebsiteListComponent,
    WidgetChooseComponent,
    WidgetHeadingComponent,
    WidgetImageComponent,
    WidgetListComponent,
    WidgetYoutubeComponent,
    WidgetEditComponent,
    ChangeBgColorDirective,
    SortableDirective,
    SafePipe,
    OrderByPipe,
    FlickrImageSearchComponent,
    WidgetHtmlComponent,
    WidgetTextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    QuillEditorModule,
  ],
  providers: [UserService, WebsiteService, PageService, WidgetService, FlickrService, SharedService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
