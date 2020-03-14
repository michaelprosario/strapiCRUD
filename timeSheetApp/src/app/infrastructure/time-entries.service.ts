import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TimeEntry } from '../core/entities/time-entry';

@Injectable({
  providedIn: 'root'
})
export class TimeEntriesService {

  urlBase = 'http://localhost:1337';

  constructor(private http: HttpClient) { }

  addTimeEntry(record: TimeEntry) {
    return this.http.post(this.urlBase + '/time-entries', record).toPromise();
  }

  deleteTimeEntry(recordId: number) {
    return this.http
      .delete(this.urlBase + '/time-entries/' + recordId)
      .toPromise();
  }

  getTimeEntries() {
    return this.http.get(this.urlBase + '/time-entries').toPromise();
  }

  getTimeEntry(recordId: number) {
    return this.http.get(this.urlBase + '/time-entries/' + recordId).toPromise();
  }
}
