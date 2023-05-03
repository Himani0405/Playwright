const { test, expect } = require("@playwright/test");

const loginToSolarladder = async (page) => {
  await page.goto("https://unergia-saas-staging-solarladder.vercel.app/");
  // assertion to check title of the page
  await expect(page).toHaveTitle("Solar Ladder");
  // click login btn
  await page.getByRole("button", { name: "Login" }).click();
  // enter email address and password
  await page.getByPlaceholder("Your Email").click();
  await page.getByPlaceholder("Your Email").fill("devesh2027@gmail.com");

  await page.getByPlaceholder("Your Password").click();
  await page.getByPlaceholder("Your Password").fill("password");
  // click on login btn
  await page.getByRole("button", { name: "Sign In" }).click();
};

test("Login solar ladder", async ({ page }) => {
  await loginToSolarladder(page);
  // click on logout btn
  // await page.getByRole('button', { name: 'LOGOUT' }).click();
});

test("Create project", async ({ page }) => {
  await loginToSolarladder(page);

  //click on create new project btn
  await page.getByRole("button", { name: "Project" }).click();
  //Enter project data
  await page.getByPlaceholder("Ex: 7").click();
  await page.getByPlaceholder("Ex: 7").fill("5");
  //Enter customer Name
  await page.getByPlaceholder("John Doe").click();
  await page.getByPlaceholder("John Doe").fill("kenny");
  //Enter mobile no.
  await page.getByPlaceholder("Enter Customer's Phone Number").click();
  await page
    .getByPlaceholder("Enter Customer's Phone Number")
    .fill("999999999999");
  //Enter project location
  await page.getByPlaceholder("Ex: Delhi").click();
  await page.getByPlaceholder("Ex: Delhi").fill("Kolhapur");

  await page.pause();
  //Click on Add Project btn
  await page.getByRole("button", { name: "Add Project" }).click();

  //change project lane
  await page
    .locator("div")
    .filter({ hasText: /^kenny$/ })
    .nth(0)
    .click();

  await page
    .getByRole("combobox")
    .first()
    .selectOption("romFQMsvOO3xFnUzL1q1-lane60");
  await page.locator(".col-4 > button:nth-child(2)").click();
});
