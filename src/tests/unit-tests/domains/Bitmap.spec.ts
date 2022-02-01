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

describe('When creating a Bitmap with invalid parameters, throw an exception...', () => {

    const nValue = 0, mValue = -1;
    const rows = ["0001", "1001", "0011"];

    it('if zero or negative numbers are input', () => {

        const operation = () => {
            Bitmap.create(nValue, mValue, rows);
        }

        expect(operation).toThrow(Error);
    });

    it('if dimensions passed are greater than the max. values', () => {

        const nValue = Bitmap.N_MAX + 1, mValue = Bitmap.M_MAX + 1;

        const operation = () => {
            Bitmap.create(nValue, mValue, rows);
        }

        expect(operation).toThrow(Error);
    });

    it('if the number of pixels provided does not match with the dimensions', () => {

        const nValue = 2, mValue = 2;

        const operation = () => {
            Bitmap.create(nValue, mValue, []);
        }

        expect(operation).toThrow(Error);
    });

    it('if there is not any white pixel', () => {

        const nValue = 2, mValue = 2;
        const rows = ["00", "00"];

        const operation = () => {
            Bitmap.create(nValue, mValue, rows);
        }

        expect(operation).toThrow(Error);
    });

    describe('When calculating the minimum distance of each pixel to its nearest white pixel', () => {

        const nValue = 3, mValue = 4;
        const pixels = ["0001", "0011", "0110"];
        const output: number[][] = [[3,2,1,0],[2,1,0,0],[1,0,0,1]];

        it('A matrix should be returned containing the minimum distance to the nearest white pixel', () => {
            const result = Bitmap.create(nValue, mValue, pixels).calculateMinDistanceMatrix();
            expect(result).toEqual(output);
        });
    });

});
