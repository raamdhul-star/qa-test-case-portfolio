// Sample Playwright automation — generic demo app, not a real client project.
//
// Workflow: I describe the scenario in plain English, use AI assistance to draft
// the first version of this script, then review and adjust selectors/assertions
// by hand against the real app before adding it to the suite.
//
// Scenario (TC-008): "User completes checkout with a saved address and sees an
// order confirmation with the correct order summary."

const { test, expect } = require('@playwright/test');

test.describe('Checkout flow', () => {
  test('completes checkout with a saved address', async ({ page }) => {
    await page.goto('https://demo.example-shop.test/login');

    await page.fill('#email', 'qa.tester@example.com');
    await page.fill('#password', 'DemoPass123!');
    await page.click('button[type="submit"]');

    await expect(page).toHaveURL(/dashboard/);

    await page.goto('https://demo.example-shop.test/cart');
    await page.click('text=Proceed to Checkout');

    await page.click('text=Use Saved Address');
    await page.click('button:has-text("Place Order")');

    await expect(page.locator('.order-confirmation h1')).toHaveText(/Order Confirmed/i);
    await expect(page.locator('.order-summary .total')).toBeVisible();
  });

  test('blocks checkout with invalid card details', async ({ page }) => {
    await page.goto('https://demo.example-shop.test/checkout');

    await page.fill('#card-number', '1234-INVALID');
    await page.click('button:has-text("Place Order")');

    await expect(page.locator('.field-error')).toContainText('Enter a valid card number');
  });
});
