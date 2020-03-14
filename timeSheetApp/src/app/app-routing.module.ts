import { EditTimeEntryComponent } from './presentation/edit-time-entry/edit-time-entry.component';
import { ListTimeEntriesComponent } from './presentation/list-time-entries/list-time-entries.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'editTimeEntry/:id', component: EditTimeEntryComponent },
  { path: 'listTimeEntries', component: ListTimeEntriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
