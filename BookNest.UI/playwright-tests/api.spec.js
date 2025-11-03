"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('API should return list of books', async ({ request }) => {
    const response = await request.get('http://localhost:4200/api/books');
    (0, test_1.expect)(response.ok()).toBeTruthy();
    const data = await response.json();
    (0, test_1.expect)(Array.isArray(data)).toBeTruthy();
    (0, test_1.expect)(data[0]).toHaveProperty('title');
});
