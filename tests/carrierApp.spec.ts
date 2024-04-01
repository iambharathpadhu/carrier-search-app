import { test, expect } from "@playwright/test";

test.describe("Carrier App", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("expect next button to be disabled when there is no criteria", async ({
    page,
  }) => {
    await expect(page.getByRole("button", { name: "Next" })).toBeDisabled();
    await page.locator(".chakra-radio__control").first().click();
    await expect(page.getByRole("button", { name: "Next" })).toBeEnabled();
  });

  test("expect app to go to next page when criteria is selected", async ({
    page,
  }) => {
    await expect(page.getByRole("button", { name: "Next" })).toBeDisabled();
    await page.locator(".chakra-radio__control").first().click();
    await expect(page.getByRole("button", { name: "Next" })).toBeEnabled();
    await page.getByRole("button", { name: "Next" }).click();
    await expect(page.getByText("Rating: 4 stars and up")).toBeVisible();
  });

  test("expect next button to be disable until carrier is selected", async ({
    page,
  }) => {
    await expect(page.getByRole("button", { name: "Next" })).toBeDisabled();
    await page.locator(".chakra-radio__control").first().click();
    await expect(page.getByRole("button", { name: "Next" })).toBeEnabled();
    await page.getByRole("button", { name: "Next" }).click();
    await expect(page.getByText("Rating: 4 stars and up")).toBeVisible();
    await expect(page.getByRole("button", { name: "Next" })).toBeDisabled();
  });
});
