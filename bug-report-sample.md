# Sample Bug Report — Root-Cause Style

This shows the format I use to hand a defect to developers: reproduced, localized, and actionable — not just "it's broken."

---

**Bug ID:** BUG-104
**Module:** Checkout (generic e-commerce demo app)
**Severity:** High
**Priority:** High
**Found in:** Staging, build 2.14.0
**Related test case:** ECOM-016

### Summary
Payment gateway timeout causes the order to be charged twice when the user retries after a slow response.

### Steps to Reproduce
1. Add an item to cart and proceed to checkout.
2. Enter valid payment details and submit.
3. Simulate a slow network so the gateway response takes >30 seconds.
4. While waiting, tap "Place Order" a second time.
5. Observe the order history and payment provider dashboard.

### Expected Result
Only one charge is made; the second tap is ignored or the button is disabled while the first request is in flight.

### Actual Result
Two separate charges are created for the same cart; only one order record is generated, so the second charge has no matching order.

### Root Cause (from investigation)
- Checked Network tab: two POST requests to `/api/checkout` fired 400ms apart.
- The "Place Order" button was not disabled after the first tap, so a slow response left a window for a duplicate submission.
- Backend does not currently deduplicate rapid repeat requests on this endpoint.

### Suggested Fix (for dev discussion)
Disable the submit button immediately on first tap (client-side), and add idempotency handling on the `/api/checkout` endpoint (e.g. an idempotency key) as a backend safeguard.

### Attachments (in a real report)
Network trace export, screen recording of the double-tap, payment provider dashboard screenshot showing duplicate charge.
