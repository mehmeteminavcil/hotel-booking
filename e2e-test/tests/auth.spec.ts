import { test, expect } from '@playwright/test';

const UI_URL = "http://localhost:5173/"

test('should allow the user the sign in', async ({ page }) => {
  
  await page.goto(UI_URL);
  // get the sing in button
  await page.getByRole("link",{name:"Sign in"}).click()

  await expect(page.getByRole('heading',{name:"Sign in"})).toBeVisible()

  await page.locator("[name=email]").fill("admin@gmail.com")
  await page.locator("[name=password]").fill("admin123")

  // submit the form  
  await page.getByRole("button",{name:"Login"}).click()

  await expect(page.getByText("Sign in Succesfull")).toBeVisible()
  await expect(page.getByRole("link",{name:"My Bookings"})).toBeVisible()
  await expect(page.getByRole("link",{name:"My Hotels"})).toBeVisible()
  await expect(page.getByRole("button",{name:"Sign Out"})).toBeVisible()

});



test("should allow user to register",async({page})=>{
  const testEmail = `test_register_${Math.floor(Math.random()*9000) + 1000}@test.com`
  await page.goto(UI_URL)
  
  await page.getByRole("link",{name:"Sign in"}).click()
  await page.getByRole("link",{name:"Create account here"}).click()
  await expect(page.getByRole('heading',{name:"Create an account"})).toBeVisible()
  await page.locator("[name=firstName]").fill("test_firstName")
  await page.locator("[name=lastName]").fill("test_lastName")
  await page.locator("[name=email]").fill(testEmail)
  await page.locator("[name=password]").fill("passwordke")
  await page.locator("[name=confirmPassword]").fill("passwordke")
  await page.getByRole("button",{name:"Create Account"}).click()
  await expect(page.getByText("Registration successfull")).toBeVisible()
  await expect(page.getByRole("link",{name:"My Bookings"})).toBeVisible()
  await expect(page.getByRole("link",{name:"My Hotels"})).toBeVisible()
  await expect(page.getByRole("button",{name:"Sign Out"})).toBeVisible()



})