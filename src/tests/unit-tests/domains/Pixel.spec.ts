import 'jest';
import { Pixel } from "../../../domains";

describe('When creating a pixel with valid (x,y) coordinates', () => {

    const xValue = 0, yValue = 0;

    it(`A new pixel should be created with the coordinates x = ${xValue} and y = ${yValue}`, () => {

        const point = Pixel.create(xValue,yValue);

        expect(point).toBeInstanceOf(Pixel);
        expect(point.x).toBe(xValue);
        expect(point.y).toBe(yValue);
        expect(point.isWhite).toBeFalsy();
    });
});


describe('When creating a pixel with invalid (x,y) coordinates', () => {

    const xValue = -1, yValue = -2;

    it(`An error should be thrown for the coordinates x = ${xValue} and y = ${yValue}`, () => {

        const operation = () => Pixel.create(xValue,yValue);

        expect(operation).toThrow(Error);

    });
})

describe('When calculating the distance between 2 pixels', () => {

    const i1 = 2, j1 = 2;
    const i2 = 3, j2 = 1;
    const p1 = Pixel.create(i1, j1);
    const p2 = Pixel.create(i2, j2);
    const result = 2;

    it(`The distance should comply with the formula: d(p1,p2)=|i1-i2|+|j1-j2| = |${i1}-${i2}|+|${j1}-${j2}| = ${result}`, () => {
        expect(p1.distanceTo(p2)).toBe(result);
    });

});