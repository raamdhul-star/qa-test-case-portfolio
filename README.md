# QA Test Case Portfolio — Raamdhan Murugaprasath

This repo is a **sample showcase** of how I write test cases, structure a test strategy, report bugs, and get to working test scripts — using an AI-prompted, "vibe testing" workflow. It's drawn from independent/freelance QA work across fintech, e-commerce, AI/chatbot, and general SaaS products (8,000+ test cases authored across these projects over time).

The real project files, product names, and test data are confidential and stay private — everything here uses **generic, made-up demo apps** to show my format and process, not any real product's tests.

## What's inside

```
sample-test-cases/
  fintech-trading-testcases.csv     — 20 cases: login/session, orders, cancellations, portfolio, market data, alerts, onboarding, accessibility
  ecommerce-testcases.csv           — 20 cases: login, search, cart, coupons, checkout, payments, order tracking, cross-device, responsive UI
  ai-chatbot-testcases.csv          — 15 cases: conversation flow, intent recognition, fallback handling, safety/guardrails, response accuracy, performance
  saas-webapp-testcases.csv         — 15 cases: auth, access control, dashboard, user settings, notifications, team invites, billing UI, session security

automation-samples/
  checkout.spec.js                  — Playwright script for an e-commerce checkout flow
  chatbot-flow.spec.js              — Playwright script for a chatbot conversation flow

test-strategy-sample.md             — how I scope and plan testing for a module/release
bug-report-sample.md                — how I write up a defect: reproduce, root cause, suggested fix
```

Each test case sheet includes test type (Functional / Negative / Edge Case / Boundary / Security / etc.), preconditions, steps, test data, expected result, and priority — the same structure I use day to day.

## My approach ("vibe testing")

I describe each scenario in plain English to an AI tool (Claude, ChatGPT, GitHub Copilot), let it draft the test case or script, then run it, review the result against the real app, and lightly correct anything that doesn't quite work — selectors, small logic fixes, wording. I'm not a full-code automation engineer; this is AI-prompted testing with hands-on validation, not a built-from-scratch framework. It lets me turn requirements into solid test coverage quickly, without skipping the review step.

## Note on scale

Across independent projects — fintech/trading, e-commerce, an AI/chatbot product, and general SaaS apps — I've authored **8,000+ test cases** using this approach, separate from my full-time employment. The sheets above are a representative sample of the format and coverage style, not the full confidential set. Project names and real data are withheld.
