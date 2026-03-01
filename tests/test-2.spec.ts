import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.passthenote.com/");
  await expect(page.getByTestId("ptn-navbar-brand")).toBeVisible();

  await page
    .getByRole("heading", { name: "PassTheNote is designed to be" })
    .dblclick();

  await expect(page.getByText("A ready-to-test platform")).toBeVisible();
});
