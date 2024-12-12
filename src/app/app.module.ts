import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PureDoublePipe } from './pipes/pure-double.pipe';
import { ImpureDoublePipe } from './pipes/impure-double.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PureDoublePipe,
    ImpureDoublePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
