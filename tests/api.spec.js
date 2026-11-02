// tests/api.spec.js

import { test, expect } from '@playwright/test';

test.describe('API-тесты для Restful-booker', () => {

    const baseURL = 'https://restful-booker.herokuapp.com';
    let bookingId;

    test('Получение списка ID бронирований', async ({ request }) => {
    // Отправляем GET-запрос
    const response = await request.get(`${baseURL}/booking`);

    // Проверка 1: Статус-код ответа
    console.log(`Статус-код: ${response.status()}`);
    expect(response.status()).toBe(200);

    // Проверка 2: Тело ответа не пустое
    const responseBody = await response.json();
    console.log('Тело ответа:', responseBody);
    expect(responseBody.length).toBeGreaterThan(0);

    // Проверка 3: В ответе есть объекты с ключом 'bookingid'
    expect(responseBody[0]).toHaveProperty('bookingid');
  });

  test('Создание бронирования', async ({ request}) => {

    const bookingData = {
        firstname: "Alex",
        lastname: "Normalex",
        totalprice: 100,
        depositpaid: true,
        bookingdates: {
            checkin: "2026-02-11",
            checkout: "2026-02-15"
        },
        additionalneeds: "Dinner"
    };

    const response = await request.post(`${baseURL}/booking`, {
        data: bookingData
    });

    console.log(`Статус-код: ${response.status()}`);
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log(`Тело ответа:`, responseBody);

    expect(responseBody).toHaveProperty('bookingid');
    bookingId = responseBody.bookingid;
    expect(responseBody.booking).toMatchObject(bookingData);
  });
});
