import {Metadata} from "../../../domains";

describe('When creating metadata with VALID parameters', () => {
    it('A new metadata object should be created', () => {
        const nTests = 1, n = 2, m = 3;
        const metadata = Metadata.create(nTests, n, m);

        expect(metadata).toBeInstanceOf(Metadata);
        expect(metadata.n).toBe(n);
        expect(metadata.m).toBe(m);
        expect(metadata.numberOfTests).toBe(nTests);
    });
});

describe('When creating metadata with INVALID parameters, an exception should be thrown ...', () => {
    it('if n,m are lower than 1', () => {
        const nTests = 1, n = 0, m = 0;
        const operation = () => Metadata.create(nTests, n,m);

        expect(operation).toThrow(Error);
    });

    it('if the number of tests is lower or equals to 0', () => {
        const nTests = 0, n = 1, m = 1;
        const operation = () => Metadata.create(nTests, n,m);

        expect(operation).toThrow(Error);
    });
});