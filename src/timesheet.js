class Timesheet {
  timesheets = new Map();

  submitTimesheet(projectName, hours) {
    if (this.timesheets.has(projectName)) {
      this.timesheets.set(projectName, this.timesheets.get(projectName) + hours);
    } else {
      this.timesheets.set(projectName, hours);
    }
    return true;
  }

  getTimesheets() {
    return [...this.timesheets.values()];
  }

  getTotalTimesheetHours(projectName) {
    return this.timesheets.get(projectName);
  }
}

module.exports = Timesheet;
