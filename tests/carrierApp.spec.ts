import { test, expect } from "@playwright/test";

test.describe("Carrier App", () => {
  test.describe("Criteria Page", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto("/");
    });

    test("should disable next button when criteria is not selected", async ({
      page,
    }) => {
      await expect(page.getByRole("button", { name: "Next" })).toBeDisabled();
      await page.locator(".chakra-radio__control").first().click();
      await expect(page.getByRole("button", { name: "Next" })).toBeEnabled();
    });

    test("should go to carrier page when criteria is selected", async ({
      page,
    }) => {
      await expect(page.getByRole("button", { name: "Next" })).toBeDisabled();
      await page.locator(".chakra-radio__control").first().click();
      await expect(page.getByRole("button", { name: "Next" })).toBeEnabled();
      await page.getByRole("button", { name: "Next" }).click();
      await expect(page.getByText("Rating: 4 stars and up")).toBeVisible();
    });

    test("should show clear all or clear when option is selected", async ({
      page,
    }) => {
      await page.locator(".chakra-radio__control").first().click();
      await expect(
        page.getByRole("button", { name: "Clear All" })
      ).toBeVisible();
      await page.getByRole("button", { name: "Clear All" }).click();
      await expect(
        page.getByRole("button", { name: "Clear All" })
      ).toBeHidden();

      await page
        .locator("label")
        .filter({ hasText: "Above" })
        .locator("span")
        .first()
        .click();
      await expect(
        page.getByRole("button", { name: "Clear", exact: true })
      ).toBeVisible();
      await page.getByRole("button", { name: "Clear", exact: true }).click();
      await expect(
        page.getByRole("button", { name: "Clear", exact: true })
      ).toBeHidden();
    });
  });

  test.describe("Carrier Selection Page", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto("/");
    });
    test("should disable next button until carrier is selected", async ({
      page,
    }) => {
      await expect(page.getByRole("button", { name: "Next" })).toBeDisabled();
      await page.locator(".chakra-radio__control").first().click();
      await expect(page.getByRole("button", { name: "Next" })).toBeEnabled();
      await page.getByRole("button", { name: "Next" }).click();
      await expect(page.getByText("Rating: 4 stars and up")).toBeVisible();
      await expect(page.getByRole("button", { name: "Next" })).toBeDisabled();
    });

    test("should go back to criteria screen on clicking modify criteria", async ({
      page,
    }) => {
      await page.locator(".chakra-radio__control").first().click();
      await expect(page.getByRole("button", { name: "Next" })).toBeEnabled();
      await page.getByRole("button", { name: "Next" }).click();
      await expect(page.getByText("Rating: 4 stars and up")).toBeVisible();
      await page.getByRole("button", { name: "Modify Criteria" }).click();
      await expect(page.getByText("Select one or more criteria")).toBeVisible();
    });
  });

  test.describe("Shipping Information Page", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto("/");
      await expect(page.getByRole("button", { name: "Next" })).toBeDisabled();
      await page.locator(".chakra-radio__control").first().click();
      await expect(page.getByRole("button", { name: "Next" })).toBeEnabled();
      await page.getByRole("button", { name: "Next" }).click();
      await expect(page.getByText("Rating: 4 stars and up")).toBeVisible();
      await page.getByText("Eco Freight").click();
      await page.getByRole("button", { name: "Next" }).click();
    });
    test("should send the carrier to be selected and go to next page", async ({
      page,
    }) => {
      await expect(
        page.getByRole("heading", { name: "Shipping Information" })
      ).toBeVisible();
    });

    test("should expect complete to be disabled when the form is empty", async ({
      page,
    }) => {
      await expect(
        page.getByRole("heading", { name: "Shipping Information" })
      ).toBeVisible();
      await expect(
        page.getByRole("button", { name: "Complete" })
      ).toBeDisabled();
    });

    test("should be able to go back and change carrier", async ({ page }) => {
      await expect(
        page.getByRole("heading", { name: "Shipping Information" })
      ).toBeVisible();
      await page.getByRole("button", { name: "Previous" }).click();
      await page.getByText("Reliable Transport").click();
      await page.getByRole("button", { name: "Next" }).click();
      await expect(
        page.getByText("Reliable Transport", { exact: true })
      ).toBeVisible();
    });

    test("should display error when form is invalid", async ({ page }) => {
      await expect(
        page.getByRole("heading", { name: "Shipping Information" })
      ).toBeVisible();
      await expect(
        page.getByRole("button", { name: "Complete" })
      ).toBeDisabled();
      await page.getByLabel("City").click();
      await page.getByLabel("City").fill("ads");
      await page.getByLabel("City").press("Meta+a");
      await page.getByLabel("City").fill("");
      await expect(page.getByText("First name is required")).toBeVisible();
    });

    test("should expect complete to be disabled when the form is complete", async ({
      page,
    }) => {
      await expect(
        page.getByRole("heading", { name: "Shipping Information" })
      ).toBeVisible();
      await expect(
        page.getByRole("button", { name: "Complete" })
      ).toBeDisabled();
      await page.getByLabel("City").click();
      await page.getByLabel("City").fill("BArath");
      await page.locator('input[name="lastName"]').click();
      await page.locator('input[name="lastName"]').fill("Kumar");
      await page.locator('input[name="address"]').click();
      await page.locator('input[name="address"]').fill("28/2");
      await page.locator('input[name="city"]').click();
      await page.locator('input[name="city"]').fill("Cbe");
      await page.locator('input[name="zipCode"]').click();
      await page.locator('input[name="zipCode"]').fill("641007");
      await page.locator('input[name="email"]').click();
      await page.locator('input[name="email"]').fill("i@g.com");
      await page.locator('input[name="cardNumber"]').click();
      await page.locator('input[name="cardNumber"]').fill("1233456788999999");
      await page.locator('input[name="expirationDate"]').click();
      await page.locator('input[name="expirationDate"]').press("Tab");
      await page.locator('input[name="expirationDate"]').fill("2024-02");
      await expect(
        page.getByRole("button", { name: "Complete" })
      ).toBeEnabled();
    });
  });
});
