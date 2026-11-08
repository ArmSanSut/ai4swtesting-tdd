class Timesheet {
  timesheets = new Map();

  submitTimesheet(projectName, hours) {
    this.timesheets.set(projectName, hours);
    return true;
  }

  getTimesheets() {
    return [...this.timesheets.values()];
  }
}

module.exports = Timesheet;
