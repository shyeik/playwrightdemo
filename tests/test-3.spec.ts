import { test, expect } from "@playwright/test";

test("Login", async ({ page }) => {
  await page.goto("https://www.passthenote.com/");

  await page.getByTestId("ptn-navbar-login-button").click();
});

test("Auto Fill Demo Credentials", async ({ page }) => {
  await page.goto("https://www.passthenote.com/");

  await page.getByTestId("ptn-navbar-login-button").click();
  await page.getByTestId("ptn-demo-creds-tester").click();
  await page.getByTestId("ptn-login-submit-button").click();
});

test("Information visibale in Login", async ({ page }) => {
  await page.goto("https://www.passthenote.com/");

  await page.getByTestId("ptn-navbar-login-button").click();
  await page.getByTestId("ptn-demo-creds-tester").click();
  await page.getByTestId("ptn-login-submit-button").click();
  await page.getByRole("button", { name: "Launch dashboard" }).click();
  await expect(page.getByTestId("ptn-dashboard-page")).toMatchAriaSnapshot(`
    - paragraph: Automation dashboard
    - heading "Welcome, Test User" [level=1]
    - paragraph: Monitor commerce telemetry, capture notes, and jump into automation drills from a single glassy cockpit.
    - button "Browse products"
    - button "Add note"
    - text: Orders tracked 0
    - paragraph: Across storefront + API
    - text: Notes captured 5
    - paragraph: Autosave, tags, audit
    - text: Recent activity 3
    - paragraph: Latest signals
    - text: Top-rated items 3/3
    - paragraph: 4.5★ and above
    `);
  await page.getByRole("link", { name: "Orders 0 📦" }).click();

  await page.getByLabel("Breadcrumb").getByText("Orders").click();
  await page.getByRole("link", { name: "App" }).click();
  await page.getByText("Continue writing →").click();

  await page.getByTestId("ptn-notes-logout-button").click();
});

test("Get Api", async ({ request }) => {
  const response = await request.post(
    "https://web.facebook.com/ajax/bulk-route-definitions/",
    {
      headers: {
        Authorization: "",
      },
    },
  );
  const responseObject = await response.json();
  console.log(responseObject);
  expect(responseObject.tags[0]).toEqual("Test");
  expect(responseObject.tags).toHaveLength(10);
});
