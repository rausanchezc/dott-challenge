"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
const domains_1 = require("../../../src/domains");
describe('When creating a point with valid coordinates', () => {
    const xValue = 0, yValue = 0;
    it(`A new point should be created with the coordinates x = ${xValue} and y = ${yValue}`, () => {
        const point = domains_1.Pixel.from(xValue, yValue);
        expect(point).toBeInstanceOf(domains_1.Pixel);
        expect(point.x).toBe(xValue);
        expect(point.y).toBe(yValue);
        expect(point.isWhite).toBeFalsy();
    });
});
