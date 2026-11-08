const Timesheet = require('../src/timesheet');

test('returns true when a timesheet is submitted with a project name and hours', () => {
  const timesheet = new Timesheet();

  expect(timesheet.submitTimesheet('Project A', 8)).toBe(true);
});

test('timesheets that are added can be retrieved as a list', () => {
  const timesheet = new Timesheet();
  timesheet.submitTimesheet('Project 1', 8);
  timesheet.submitTimesheet('Project 2', 8);
  timesheet.submitTimesheet('Project 3', 8);

  expect(timesheet.getTimesheets()).toHaveLength(3);
});

test('calculates the total hours worked from multiple timesheets for one project', () => {
  const timesheet = new Timesheet();
  timesheet.submitTimesheet('Project 1', 8);
  timesheet.submitTimesheet('Project 1', 4);
  timesheet.submitTimesheet('Project 1', 2.5);

  expect(timesheet.getTotalTimesheetHours('Project 1')).toBe(14.5);
});

