import { test, expect } from '@playwright/test'

test.use({
  geolocation: { latitude: 40.71, longitude: -74.01 },
  permissions: ['geolocation'],
})

test('Weather app title', async ({ page }) => {
  await page.goto('http://localhost:5173', { waitUntil: 'domcontentloaded' })

  await expect(page).toHaveTitle('Weather App')
})

test('Header click', async ({ page }) => {
  await page.goto('http://localhost:5173/test', {
    waitUntil: 'domcontentloaded',
  })

  const header = page.getByRole('heading', { name: 'Weather app' })

  await header.click()

  expect(page.url()).toBe('http://localhost:5173/')
})

test('Saved cities click', async ({ page }) => {
  await page.goto('http://localhost:5173', { waitUntil: 'domcontentloaded' })

  const savedCities = page.getByText('Saved cities')

  await savedCities.click()

  expect(page.url()).toContain('/cities')
})

test('Change theme', async ({ page }) => {
  await page.goto('http://localhost:5173', { waitUntil: 'domcontentloaded' })

  const navigation = await page.getByRole('navigation')
  const button = await navigation.getByRole('button').last()

  await button.click()

  expect(page.locator('html')).toHaveAttribute('class', 'dark')
})

test('Weather card title with geolocation', async ({ page }) => {
  await page.goto('http://localhost:5173', { waitUntil: 'domcontentloaded' })

  await page.waitForResponse(
    (response) =>
      response.url().includes('/forecast.json') && response.status() === 200
  )
  const title = await page.getByText('New York').innerText()

  expect(title).toBe('United States of America / New York')
})

test('Search input', async ({ page }) => {
  await page.goto('http://localhost:5173', { waitUntil: 'domcontentloaded' })

  const searchInput = page.getByPlaceholder('Search')

  await searchInput.fill('Moscow')

  await page.waitForResponse(
    (response) =>
      response.url().includes('/search.json') && response.status() === 200
  )

  const searchValue = page.getByText('Moscow')
  await searchValue.click()

  expect(await searchInput.inputValue()).toBe('')
  expect(await searchValue.isVisible()).toBeFalsy()

  const title = await page.getByText('Moscow City').innerText()

  expect(title).toBe('Russia / Moscow City')
})
