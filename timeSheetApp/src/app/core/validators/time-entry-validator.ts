import { AbstractValidator } from 'fluent-ts-validator';
import { TimeEntry } from '../entities/time-entry';

export class TimeEntryValidator extends AbstractValidator<TimeEntry> {
    constructor() {
        super();
        this.validateIfString(r => r.project).isNotEmpty();
        this.validateIfString(r => r.story).isNotEmpty();
        this.validateIfString(r => r.entryDate).isNotEmpty();
        this.validateIfNumber(r => r.hours).isGreaterThan(0);
    }
}