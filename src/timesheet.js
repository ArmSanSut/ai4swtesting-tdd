// Parse the number's decimal representation, including scientific notation.
function toDecimal(value) {
  const [coefficient, exponent = '0'] = value.toString().split('e');
  const [integer, fraction = ''] = coefficient.split('.');
  const scale = fraction.length - Number(exponent);
  const units = BigInt(integer + fraction);

  return scale < 0
    ? { units: units * 10n ** BigInt(-scale), scale: 0 }
    : { units, scale };
}

function unitsAtScale(decimal, scale) {
  return decimal.units * 10n ** BigInt(scale - decimal.scale);
}

function normalizeProjectName(projectName) {
  if (typeof projectName !== 'string' || projectName.trim() === '') {
    throw new TypeError('Project name must be a non-empty string.');
  }

  return projectName.trim().toLowerCase();
}

class Timesheet {
  #timesheets = new Map();

  submitTimesheet(projectName, hours) {
    const key = normalizeProjectName(projectName);
    if (typeof hours !== 'number' || !Number.isFinite(hours)) {
      throw new TypeError('Hours must be a finite number.');
    }
    if (hours < 0) {
      throw new RangeError('Hours must be non-negative.');
    }

    const previous = this.#timesheets.get(key) ?? { units: 0n, scale: 0 };
    const submitted = toDecimal(hours);
    const scale = Math.max(previous.scale, submitted.scale);
    const units = unitsAtScale(previous, scale) + unitsAtScale(submitted, scale);
    const total = Number(`${units}e-${scale}`);

    if (!Number.isFinite(total)) {
      throw new RangeError('Total hours exceed the numeric range.');
    }

    // Reject rounding at the public number boundary as well as overflow.
    const represented = toDecimal(total);
    const comparisonScale = Math.max(scale, represented.scale);
    if (unitsAtScale(represented, comparisonScale)
        !== unitsAtScale({ units, scale }, comparisonScale)) {
      throw new RangeError('Total hours cannot be represented without precision loss.');
    }

    this.#timesheets.set(key, { units, scale });
    return true;
  }

  getTimesheets() {
    return [...this.#timesheets.values()].map(({ units, scale }) => Number(`${units}e-${scale}`));
  }

  getTotalTimesheetHours(projectName) {
    const total = this.#timesheets.get(normalizeProjectName(projectName));
    return total ? Number(`${total.units}e-${total.scale}`) : 0;
  }
}

module.exports = Timesheet;
