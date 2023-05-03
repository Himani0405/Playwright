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

test("create O&M", async ({ page }) => {
  //login
  await loginToSolarladder(page);
  //click on project
  await page
    .locator("div")
    .filter({ hasText: /^TestAutomation$/ })
    .nth(0)
    .click();

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

  await page.getByRole("button", { name: "Add Project O&M" }).click();

  await page.locator("//input[@type='text']").type("Thivim");
  await page.keyboard.press("Enter");

  await page
    .locator("(//select[@class='form-control'])[3]")
    .selectOption({ value: "te3cL40MgOMAqpgKvqq6" });

  // enter start and end date for onm
  await page.locator("//input[@name='startDate']").fill("2023-05-03");
  await page.locator("//input[@name='endDate']").fill("2023-08-24");

  //click on repeat mode
  await page
    .locator("//label[@class='MuiFormControlLabel-root']/span[1]/span[1]/input")
    .check();
  await page.pause();
  await page.locator("(//div[@class='col-6 p-1'])[2]/input").click();
  await page.locator("(//div[@class='col-6 p-1'])[2]/input").fill("2");
  await page.getByPlaceholder("Number of cycles in June").click();
  await page.getByPlaceholder("Number of cycles in June").fill("3");
  await page.getByPlaceholder("Number of cycles in July").click();
  await page.getByPlaceholder("Number of cycles in July").fill("3");
  await page.getByPlaceholder("Number of cycles in August").click();
  await page.getByPlaceholder("Number of cycles in August").fill("2");
  // select AMCtype
  await page
    .locator("//select[@name='AMCType']")
    .selectOption({ value: "Cleaning" });
  // select drop-down
  await page
    .locator("(//select[@class='form-control'])[6]")
    .selectOption({ value: "J4m0xAu0yO8YewZQvCA4" });
  await page
    .locator("(//select[@class='form-control'])[7]")
    .selectOption({ value: "myWuON9E4kznvZubBhlo" });
  //await page.getByRole("button", { name: "Create O&M" }).click();
});
