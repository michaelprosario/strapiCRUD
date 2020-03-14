export class TimeEntry {
    id: number;
    project: string;
    story: string;
    entryDate: string;
    hours: number;

    constructor() {
        this.id = 0;
        this.project = '';
        this.story = '';
        this.entryDate = '';
        this.hours = 0;
    }
}