# Sample Test Strategy — Generic Web/Mobile Product

This is a template-level example of how I scope testing for a new module or release, using a made-up product for illustration.

## Scope

- **In scope:** Core user flows (auth, primary transaction flow, notifications), cross-browser (Chrome, Safari, Edge), iOS and Android native apps, responsive mobile web.
- **Out of scope:** Third-party payment gateway internals, backend infrastructure load testing (owned by a separate team).

## Approach

1. **Requirement walkthrough** — review functional specs / tickets with Product Owner, note ambiguous areas to clarify before writing test cases.
2. **Test case authoring** — describe each scenario in plain English, use AI tools to draft the first pass of test cases (steps, expected result, priority), then review and correct against the actual requirements and app behaviour.
3. **Test data prep** — set up accounts/data states needed (new user, existing user, edge-of-limit data, expired/invalid data).
4. **Execution** — manual pass through positive, negative, edge-case and accessibility scenarios; AI-drafted scripts for the highest-value repeatable flows, executed and manually corrected until stable.
5. **Defect triage** — reproduce, isolate the failing layer (UI / API / data), and write up in the bug-report format (see `bug-report-sample.md`).
6. **Regression** — maintain a living regression set per module; re-run before every release.
7. **Sign-off** — release readiness checklist reviewed with Product Owner and dev leads before go-live.

## Entry / Exit Criteria

- **Entry:** Feature deployed to a stable test environment; test data available; no blocking build issues.
- **Exit:** All High-priority test cases passed; no open Critical/High defects; known issues documented and accepted by Product Owner.

## Test Case Types Covered

Functional, Negative, Edge Case, Boundary, Security (session/access), Non-functional (basic performance/response time), Accessibility, UI/Responsive.
