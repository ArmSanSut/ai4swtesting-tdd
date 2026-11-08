const Timesheet = require('../src/timesheet');

test('returns true when a timesheet is submitted with a project name and hours', () => {
  const timesheet = new Timesheet();

  expect(timesheet.submitTimesheet('Project A', 8)).toBe(true);
});

