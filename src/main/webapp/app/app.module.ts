import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { AuthInterceptor } from './blocks/interceptor/auth.interceptor';
import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { BugTrackerJHipsterSharedModule } from 'app/shared/shared.module';
import { BugTrackerJHipsterCoreModule } from 'app/core/core.module';
import { BugTrackerJHipsterAppRoutingModule } from './app-routing.module';
import { BugTrackerJHipsterHomeModule } from './home/home.module';
import { BugTrackerJHipsterEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';
import { MyticketsComponent } from './mytickets/mytickets.component';

@NgModule({
  imports: [
    BrowserModule,
    BugTrackerJHipsterSharedModule,
    BugTrackerJHipsterCoreModule,
    BugTrackerJHipsterHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    BugTrackerJHipsterEntityModule,
    BugTrackerJHipsterAppRoutingModule
  ],
  declarations: [
    JhiMainComponent,
    NavbarComponent,
    ErrorComponent,
    PageRibbonComponent,
    ActiveMenuDirective,
    FooterComponent,
    MyticketsComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpiredInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    }
  ],
  bootstrap: [JhiMainComponent]
})
export class BugTrackerJHipsterAppModule {}
