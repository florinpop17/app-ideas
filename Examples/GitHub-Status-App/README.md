# GitHub Status

A dependency-free web app that reads the public GitHub Status summary API and
shows the overall service health and individual component statuses.

## Run locally

Open `index.html` in a browser. The app needs an internet connection to request
the public status API:
<https://www.githubstatus.com/api/v2/summary.json>.

## User stories

- [x] As a visitor, I can see the current overall GitHub service status.
- [x] As a visitor, I can see the status of each GitHub service component.
- [x] As a visitor, I can refresh the data on demand.
- [x] As a visitor, I can distinguish degraded, maintenance, and outage states.
- [x] As a visitor, I receive a clear message if status data cannot be loaded.

## Suggested pull request sequence

1. **PR 1 — Status dashboard shell:** Add the responsive page, accessible
   structure, and component list layout.
2. **PR 2 — Live status data:** Read the GitHub Status summary API and render
   overall and component statuses, including loading and request errors.
3. **PR 3 — Health indicators:** Visually distinguish operational, maintenance,
   degraded, outage, and unrecognized states.
4. **PR 4 — Verification and polish:** Add focused automated coverage and
   document local setup and user stories.

This example contains the MVP from PRs 1–3 together in the current working
change; the sequence above is a suggested way to split it into reviewable PRs.
