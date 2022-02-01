"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
const domains_1 = require("../../../src/domains");
describe('When creating a Bitmap with valid dimensions', () => {
    const nValue = 3, mValue = 4;
    const rows = ["0001", "1001", "0011"];
    it(`A new bitmap should be created with the dimensions (n = ${nValue}, m = ${mValue} )`, () => {
        const bitmap = domains_1.Bitmap.create(nValue, mValue, rows);
        expect(bitmap).toBeInstanceOf(domains_1.Bitmap);
        expect(bitmap.n).toBe(nValue);
        expect(bitmap.m).toBe(mValue);
    });
});
describe('When creating a Bitmap with invalid dimensions', () => {
    const nValue = 0, mValue = -1;
    const rows = ["0001", "1001", "0011"];
    it('If zero or negative numbers are input, an exception should be thrown', () => {
        const operation = () => {
            domains_1.Bitmap.create(nValue, mValue, rows);
        };
        expect(operation).toThrow(Error);
    });
    it('If dimensions passed are greater than the max. values, an exception should be thrown', () => {
        const nValue = domains_1.Bitmap.N_MAX + 1, mValue = domains_1.Bitmap.M_MAX + 1;
        const operation = () => {
            domains_1.Bitmap.create(nValue, mValue, rows);
        };
        expect(operation).toThrow(Error);
    });
});
