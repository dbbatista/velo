import { test, expect } from '@playwright/test'

/// AAA - Arrange, Act, Assert 

test('it should validate that the order is approved ', async ({ page }) => {

    // Arrange
    await page.goto('http://localhost:5173/')
    await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint')
    await page.getByRole('link', { name: 'Consultar Pedido' }).click()
    await expect(page.getByRole('heading')).toContainText('Consultar Pedido')

    // Act
    //await page.locator('//label[text()="Número do Pedido"]/..//input').fill('VLO-E0MM0U')
    //await page.locator('input[name="order-id"]').fill('VLO-E0MM0U')
    //await page.getByLabel('Número do Pedido').fill('VLO-E0MM0U')
    //await page.getByPlaceholder('Ex: VLO-ABC123').fill('VLO-E0MM0U')
    await page.getByRole('textbox', { name: 'Número do Pedido' }).fill('VLO-E0MM0U')
    // await page.getByTestId('search-order-button').click()
    // await page.getByRole('button', { name: 'Buscar Pedido' }).click()
    await page.locator('//button[text()= "Buscar Pedido"]').click()

    // Assert
    // await expect(page.getByTestId('order-result-id')).toBeVisible({timeout: 10_000})
    // await expect(page.getByTestId('order-result-id')).toContainText('VLO-E0MM0U')

    await expect(page.getByText('VLO-E0MM0U')).toBeVisible({timeout: 10_000});
    await expect(page.getByTestId('order-result-VLO-E0MM0U')).toContainText('VLO-E0MM0U');

    // await expect(page.getByTestId('order-result-status')).toBeVisible()
    // await expect(page.getByTestId('order-result-status')).toContainText('APROVADO')

    await expect(page.getByText('APROVADO')).toBeVisible();
    await expect(page.getByTestId('order-result-VLO-E0MM0U')).toContainText('APROVADO');

})