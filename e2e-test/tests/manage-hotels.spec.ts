import {test,expect} from "@playwright/test"
import path from "path"

const UI_URL = "http://localhost:5173/"


test.beforeEach(async ({page})=>{
  
  await page.goto(UI_URL);

  // get the sing in button
  await page.getByRole("link",{name:"Sign in"}).click()

  await expect(page.getByRole('heading',{name:"Sign in"})).toBeVisible()

  await page.locator("[name=email]").fill("admin@gmail.com")
  await page.locator("[name=password]").fill("admin123")

  // submit the form  
  await page.getByRole("button",{name:"Login"}).click()

  await expect(page.getByText("Sign in Succesfull")).toBeVisible()

})


test("should allow user to add a hotel", async({page})=>{
    await page.goto(`${UI_URL}add-hotel`)

    await page.locator('[name="name"]').fill("Test Hotel")
    await page.locator('[name="city"]').fill("Test City")
    await page.locator('[name="country"]').fill("Test country")
    await page.locator('[name="description"]').fill("Test description")
    await page.locator('[name="pricePerNight"]').fill("100")
    await page.selectOption('select[name="starRating"]',"3")

    await page.getByText("Budget").click()

    await page.getByLabel("Free Wifi").check()
    await page.getByLabel("Parking").check()
    await page.getByLabel("Spa").check()

    await page.locator('[name="adultCount"]').fill("2")
    await page.locator('[name="childCount"]').fill("4")

    await page.setInputFiles('[name="imageFiles"]',[
        path.join(__dirname,"files","1.jpg"),
        path.join(__dirname,"files","2.jpg"),
        path.join(__dirname,"files","3.jpg"),
        path.join(__dirname,"files","4.jpg"),
        path.join(__dirname,"files","5.jpg"),
    ])

    await page.getByRole('button',{name:"Save"}).click()
    await expect(page.getByText("Hotel Saved!")).toBeVisible()

})


test("should display hotels" ,async ({page})=>{
  await page.goto(`${UI_URL}my-hotels`)

  await expect(page.getByRole("link",{name:"Add Hotel"})).toBeVisible()

  await expect (page.getByText("Testing Hotel")).toBeVisible()
  await expect (page.getByText("For Testing description")).toBeVisible()
  await expect (page.getByText("For Testing City,For Testing country")).toBeVisible()
  await expect (page.getByText("Cabin")).toBeVisible()
  await expect (page.getByText("$ 199 per night")).toBeVisible()
  await expect (page.getByText("3 adults,3 children")).toBeVisible()
  await expect (page.getByText("1 Star Rating")).toBeVisible()

  const viewDetailsButton = page.locator('text="View Details"').nth(0) // Change the index to 0, 1, or 2 depending on which button you want to check
  await expect(viewDetailsButton).toBeVisible()
  

})