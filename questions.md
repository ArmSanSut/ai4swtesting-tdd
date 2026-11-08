1. **What does “half hour units” mean for entering time?** - Should users enter decimal hours such as `1.5`, a number of half-hour units such as `3`, or a duration such as `01:30`?

2. **How should durations that are not multiples of 30 minutes be handled?** - Should the system reject them or round them, and which rounding rule should apply consistently?

3. **What amounts of time are valid?** - Should zero, negative values, or unusually large durations be rejected, and is there a maximum per entry or day?

4. **How should missing or invalid inputs be handled?** - Define consistent behavior for a missing project, whitespace-only project names, missing time, and nonnumeric time.

5. **What uniquely identifies a project?** - Should names such as “Project A,” “project a,” and “Project A ” refer to the same project or separate projects?

6. **How should multiple entries for the same project be recorded and totaled?** - Should each submission remain a separate historical entry, and should the project total accumulate all submitted time?

7. **When should tracked time be dated?** - Should an entry use its submission date or a user-selected work date, and which timezone determines the date?

8. **How should corrections affect the history and project totals?** - Can users edit or delete entries, and should previous values remain visible in the history?

9. **Where should users see their history, and what should it contain?** - Clarify whether the history shows individual entries, project totals, dates, or all three, so different views show consistent information.

10. **Who counts as “I,” and how is that identity established?** - Clarify how entries are associated with a user and how the same ownership rules apply across history views, totals, and exports.
