import { DistanceMatrix } from "../../../domains";

describe('When creating a Distance Matrix with VALID parameters', () => {
    const nValue = 2, mValue = 2;
    const matrix: number[][] = [[1,4], [1,3]];
    it('A new Distance Matrix should be created', () => {
        const distanceMatrix = new DistanceMatrix(nValue, mValue, matrix);

        expect(distanceMatrix).toBeInstanceOf(DistanceMatrix);
        expect(distanceMatrix.n).toBe(nValue);
        expect(distanceMatrix.m).toBe(mValue);
        expect(distanceMatrix.matrix).toEqual(matrix);
    });
});


describe('When creating a Distance Matrix with INVALID parameters, throw an exception ...', () => {
    it('if n, m are negative numbers', () => {

        const nValue = -1, mValue = -2;
        const matrix: number[][] = [];

        const operation = () => {
            new DistanceMatrix(nValue, mValue, matrix);
        };

        expect(operation).toThrow(Error);
    });
});


describe('When stringify the Distance Matrix', () => {
    it('A Distance Matrix should be returned representing the internal matrix', () => {

        const nValue = 2, mValue = 2;
        const matrix: number[][] = [[1,2], [3,4]];
        const output = "1 2\n3 4\n";

        const distanceMatrix = new DistanceMatrix(nValue, mValue, matrix);

        expect(distanceMatrix.stringify()).toEqual(output);
    });
})
