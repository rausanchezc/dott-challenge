export class Metadata {
    private readonly _nTests: number;
    private readonly _n: number;
    private readonly _m: number;

    private constructor(nTests: number, n: number, m: number) {

        if (n < 1 || m < 1) throw Error('n,m should be greater than 0');
        if (nTests <= 0) throw Error('# of tests should be a positive number');

        this._nTests = nTests;
        this._n = n;
        this._m = m;
    };

    get numberOfTests(): number {
        return this._nTests;
    };

    get n(): number {
        return this._n;
    };

    get m(): number {
        return this._m;
    };

    static create(nTests: number, n: number, m: number) {
        return new Metadata(nTests, n, m);
    };
}