import {EOL} from "os";

export class DistanceMatrix {
    private readonly _matrix: number[][];
    private readonly _n: number;
    private readonly _m: number;

    constructor(n: number, m: number, matrix: number[][]) {

        if (n < 0 || m < 0) throw Error('Negative numbers are disallowed for n, m');

        this._matrix = matrix;
        this._n = n;
        this._m = m;
    }

    get n() {
        return this._n;
    }

    get m() {
        return this._m;
    }

    get matrix() {
        return this._matrix;
    }

    stringify(): string {
        let output = "";

        for (let i = 0; i < this._n; i++) {
            for(let j = 0; j < this._m; j++) {
                output += this._matrix[i][j];
                if (j < (this._m - 1)) output += ' ';
             }
            output += EOL;
        }

        return output;
    }
}