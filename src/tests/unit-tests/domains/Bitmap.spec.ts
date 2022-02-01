import 'jest';
import {Bitmap} from "../../../domains";

describe('When creating a Bitmap with valid dimensions', () => {

    const nValue = 3, mValue = 4;
    const rows = ["0001", "1001", "0011"];

    it(`A new bitmap should be created with the dimensions (n = ${nValue}, m = ${mValue} )`, () => {

        const bitmap = Bitmap.create(nValue, mValue, rows);

        expect(bitmap).toBeInstanceOf(Bitmap);
        expect(bitmap.n).toBe(nValue);
        expect(bitmap.m).toBe(mValue);
    });
});

describe('When creating a Bitmap with invalid dimensions', () => {

    const nValue = 0, mValue = -1;
    const rows = ["0001", "1001", "0011"];

    it('If zero or negative numbers are input, an exception should be thrown', () => {

        const operation = () => {
            Bitmap.create(nValue, mValue, rows);
        }

        expect(operation).toThrow(Error);
    });

    it('If dimensions passed are greater than the max. values, an exception should be thrown', () => {

        const nValue = Bitmap.N_MAX + 1, mValue = Bitmap.M_MAX + 1;

        const operation = () => {
            Bitmap.create(nValue, mValue, rows);
        }

        expect(operation).toThrow(Error);
    });

});
