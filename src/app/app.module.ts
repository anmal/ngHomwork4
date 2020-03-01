import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {appEffects, appMetaReducers, appReducers} from './store';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {WeatherComponent} from './resorts-widget/resort-info-detail/weather/weather.component';
import {SocialInfoComponent} from './resorts-widget/resort-info-detail/social-info/social-info.component';
import {ResortInfoDetailComponent} from './resorts-widget/resort-info-detail/resort-info-detail.component';
import {ResortsWidgetComponent} from './resorts-widget/resorts-widget.component';
import {FooterComponent} from './resorts-widget/footer/footer.component';
import {ResortInfoBriefComponent} from './resorts-widget/resort-list/resort-info-brief/resort-info-brief.component';
import {TelephonePipe} from './shared/pipes/telephone.pipe';
import {TemperatureComponent} from './resorts-widget/resort-info-detail/weather/temperature/temperature.component';
import {ImgUrlPipe} from './shared/pipes/imgUrl.pipe';
import {ResortListComponent} from './resorts-widget/resort-list/resort-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SocialInfoComponent,
    ResortInfoDetailComponent,
    ResortsWidgetComponent,
    FooterComponent,
    ResortInfoBriefComponent,
    TelephonePipe,
    TemperatureComponent,
    ImgUrlPipe,
    ResortListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(appReducers, {metaReducers: appMetaReducers}),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot(appEffects),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
