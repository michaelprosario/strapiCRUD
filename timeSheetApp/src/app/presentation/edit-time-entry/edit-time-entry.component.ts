import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TimeEntriesService } from '../../infrastructure/time-entries.service';
import { TimeEntry } from '../../core/entities/time-entry';
import { TimeEntryValidator } from 'src/app/core/validators/time-entry-validator';

@Component({
  selector: 'app-edit-time-entry',
  templateUrl: './edit-time-entry.component.html',
  styleUrls: ['./edit-time-entry.component.scss']
})
export class EditTimeEntryComponent implements OnInit {
  recordId: number;
  isLoaded: boolean;
  record: TimeEntry;
  errors: string[];

  constructor(
    private route: ActivatedRoute,
    private service: TimeEntriesService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    this.recordId = parseInt(this.route.snapshot.paramMap.get('id'));
    if (this.recordId === 0) {
      this.record = new TimeEntry();
      this.isLoaded = true;
    } else {
      this.service.getTimeEntry(this.recordId).then(data => {
        this.record = data as TimeEntry;
        this.isLoaded = true;
      });
    }

    this.errors = [];
  }

  onSave() {
    const validator = new TimeEntryValidator();
    const result = validator.validate(this.record);
    this.errors = result.getFailureMessages();

    if (this.errors.length > 0) {
      return;
    }

    this.service.addTimeEntry(this.record).then(response => {
      this.router.navigate(['/listTimeEntries']);
    }).catch(error => {
      console.log(error);
    });
  }
}
