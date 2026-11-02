// tests/api.spec.js

import { test, expect } from '@playwright/test';

test.describe('API-тесты для Restful-booker', () => {
    test.describe.configure({ mode: 'serial' });

    const baseURL = 'https://restful-booker.herokuapp.com';
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

    let bookingId;
    let authToken;

    test('Получение списка ID бронирований', async ({ request }) => {
        const response = await request.get(`${baseURL}/booking`);

        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody.length).toBeGreaterThan(0);

        expect(responseBody[0]).toHaveProperty('bookingid');
    });

    test('Создание бронирования', async ({ request }) => {

        const response = await request.post(`${baseURL}/booking`, {
            data: bookingData
        });

        expect(response.status()).toBe(200);

        const responseBody = await response.json();

        expect(responseBody).toHaveProperty('bookingid');
        
        bookingId = responseBody.bookingid;

        expect(responseBody.booking).toMatchObject(bookingData);
    });

    test ('Получение информации о бронировании', async ({ request }) => {

        const response = await request.get(`${baseURL}/booking/${bookingId}`);

        expect(response.status()).toBe(200);

        const responseBody = await response.json();

        expect(responseBody).toMatchObject(bookingData);
    });

    test('Обновление бронирования', async ({ request }) => {

        const authResponse = await request.post(`${baseURL}/auth`, {
            data: {
                username: "admin",
                password: "password123"
            }
        });

        expect(authResponse.status()).toBe(200);

        const authResponseBody = await authResponse.json();
        authToken = authResponseBody.token;

        const updatedBookingData = {
            ...bookingData,
            firstname: 'Leon',
            totalprice: 300
        };

        const response = await request.put(`${baseURL}/booking/${bookingId}`, {
            headers: {
                'Cookie': `token=${authToken}`
            },
            data: updatedBookingData
        });

        expect(response.status()).toBe(200);

        const responseBody = await response.json();

        expect(responseBody).toMatchObject(updatedBookingData);
    });

    test('Удаление бронирования', async ({ request }) => {

        const response = await request.delete(`${baseURL}/booking/${bookingId}`, {
            headers: {
                'Cookie': `token=${authToken}`
            },
        });

        expect(response.status()).toBe(201);

        const getResponse = await request.get(`${baseURL}/booking/${bookingId}`);

        expect(getResponse.status()).toBe(404);
    });
});