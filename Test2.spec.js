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

test("check next onm scheduled date is visible", async ({ page }) => {
  //login
  await loginToSolarladder(page);
  //click on project
  await page
    .locator("div")
    .filter({ hasText: /^Manan$/ })
    .nth(0)
    .click();
  await page.pause();
  await page
    .locator(
      "(//div[@class='h-fit rounded-full bg-white nopadding px-2 py-3 xl:py-4'])[2]"
    )
    .first()
    .hover();
  await page
    .locator(
      "(//div[@class='h-fit rounded-full bg-white nopadding px-2 py-3 xl:py-4'])[2]//a[12]"
    )
    .click();
  // checking the next onm schedule date is visible
  await expect(
    page.locator("//div[@class='MuiCardContent-root']/p[3]")
  ).toBeVisible();
  // checking the next date of schedule onm
  await expect(
    page.locator("//div[@class='MuiCardContent-root']/p[3]")
  ).toHaveText(" Next Date: 5/10/2023");

  //await page.getByRole("button", { name: "Add Project O&M" }).click();
  await page.locator("(//button[@type='button'])[6]").click();
});

test("onm filter-assign to ", async ({ page }) => {
  //login
  await loginToSolarladder(page);
  //click on onm
  await page
    .locator(
      "//div[@class='fixedcontainer general-navbar w-fit dashboard-navbar']//a[11]"
    )
    .click();
  //click on filter
  await page.locator("(//button[text()=' Filters'])").click();
  //select the assigne
  await page
    .locator("(//select[@class='form-control'])[6]")
    .selectOption({ value: "te3cL40MgOMAqpgKvqq6" });
  //click on apply filter
  await page.locator("//span[text()='Apply Filters']").click();
  //checking only selected assigne is reflecting
  await expect(
    page.locator("(//div[@class='MuiCardContent-root'])[1]//p[2]")
  ).toHaveText(/.*himani pvt /);
  //click on reset
  await page.locator("//span[text()='Reset']").click();
});

test("onm filter- state", async ({ page }) => {
  //login
  await loginToSolarladder(page);
  //click on onm
  await page
    .locator(
      "//div[@class='fixedcontainer general-navbar w-fit dashboard-navbar']//a[11]"
    )
    .click();
  //click on filter
  await page.locator("(//button[text()=' Filters'])").click();
  //select the state
  await page.locator("//select[@name='state']").selectOption({ value: "Goa" });
  //click on apply filter
  await page.locator("//span[text()='Apply Filters']").click();
  //checking only selected state is reflecting
  await expect(
    page.locator("(//div[@class='MuiCardContent-root'])[1]//p[1]")
  ).toHaveText(/.*Goa/);
  //click on reset
  await page.locator("//span[text()='Reset']").click();
});
