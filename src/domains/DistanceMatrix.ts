import {EOL} from "os";

export class DistanceMatrix {
    private readonly _matrix: number[][];
    private readonly _n: number;
    private readonly _m: number;

    constructor(n: number, m: number, matrix: number[][]) {
        this._matrix = matrix;
        this._n = n;
        this._m = m;
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