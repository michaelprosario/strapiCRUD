
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { EditTimeEntryComponent } from './presentation/edit-time-entry/edit-time-entry.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListTimeEntriesComponent } from './presentation/list-time-entries/list-time-entries.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    ListTimeEntriesComponent,
    EditTimeEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
