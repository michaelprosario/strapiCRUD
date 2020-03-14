import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TimeEntriesService } from 'src/app/infrastructure/time-entries.service';
import { TimeEntry } from 'src/app/core/entities/time-entry';

@Component({
  selector: 'app-list-time-entries',
  templateUrl: './list-time-entries.component.html',
  styleUrls: ['./list-time-entries.component.scss']
})
export class ListTimeEntriesComponent implements OnInit {
  isLoaded: boolean;
  records: TimeEntry[];

  constructor(
    private route: ActivatedRoute,
    private service: TimeEntriesService,
    private router: Router
  ) { }

  onEdit(record: TimeEntry) {
    this.router.navigate(['/editTimeEntry/' + record.id]);
  }

  onDelete(record: TimeEntry) {
    if (confirm('Press OK to delete record')) {
      this.service
        .deleteTimeEntry(record.id)
        .then((data => { this.loadListData(); }))
        .catch(error => { });
    }
  }

  onAddTimeEntry() {
    this.router.navigate(['/editTimeEntry/0']);
  }

  loadListData() {
    this.service
      .getTimeEntries()
      .then(data => {
        this.records = data as TimeEntry[];
        console.log(data);
      })
      .catch(errors => {
        console.error(errors);
      });
  }

  ngOnInit(): void {
    this.loadListData();
    this.isLoaded = true;
  }
}
