// Sample chat-flow test — generic demo chatbot, not a real client project.
//
// Workflow ("vibe testing"): I described BOT-002 (multi-turn context) and BOT-005
// (out-of-scope handling) in plain English, an AI tool drafted this script, and I
// ran it against a demo bot, checked the actual replies, and adjusted the
// assertions/selectors by hand to match real behaviour.

const { test, expect } = require('@playwright/test');

test.describe('Chatbot conversation flow', () => {
  test('maintains context across a follow-up question (BOT-002)', async ({ page }) => {
    await page.goto('https://demo.example-chat.test/');

    await page.fill('#chat-input', 'Tell me about plan A');
    await page.click('#send-button');
    await expect(page.locator('.bot-message').last()).toContainText(/plan a/i);

    await page.fill('#chat-input', 'How much does it cost?');
    await page.click('#send-button');
    await expect(page.locator('.bot-message').last()).toContainText(/plan a/i);
  });

  test('declines an out-of-scope question without hallucinating (BOT-005)', async ({ page }) => {
    await page.goto('https://demo.example-chat.test/');

    await page.fill('#chat-input', "What's the weather in Paris?");
    await page.click('#send-button');

    const reply = page.locator('.bot-message').last();
    await expect(reply).toContainText(/can.?t help with that|outside what I can help with/i);
  });
});
