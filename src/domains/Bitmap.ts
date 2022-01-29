import { Pixel } from "./Pixel";
import { EOL } from "os";

export class Bitmap {

    static readonly N_MAX = 182;
    static readonly M_MAX = 182;

    private readonly _n: number;
    private readonly _m: number;
    private readonly _points: Pixel[];

    private constructor(n: number, m: number, points: Pixel[]) {

        if ((n <= 0 || n > Bitmap.N_MAX) || (m <= 0 || m > Bitmap.M_MAX))  throw Error(`Invalid dimensions (n = ${n}, m = ${ m })`);

        if (points.length < (n * m)) throw Error("There are less points than expected");

        if (points.filter(p => p.isWhite).length === 0) throw Error('At least one pixel should be white');

        this._n = n;
        this._m = m;
        this._points = points;
    }

    get n(): number {
        return this._n;
    }

    get m(): number {
        return this._m;
    }

    calculateMinDistanceMatrix(): number[][] {
        const distancesMatrix: number[][] = new Array(this.n).fill(0).map(() => new Array(this.m).fill(0));
        const whitePixels = this._points.filter(p => p.isWhite);

        this._points.forEach( p => {
            let min = Number.MAX_VALUE;
            whitePixels.forEach(w => min = Math.min(p.distanceTo(w), min));
            distancesMatrix[p.x][p.y] = min;
        });

        return distancesMatrix;
    }

    static create(n: number, m: number, rows: string[]): Bitmap {
        const points: Pixel[] = new Array<Pixel>();

        rows.forEach((row, i) => {
            row.split('').forEach((ch, j) => {
                points.push(Pixel.create(i,j, ch === "1"));
            });
        });

        return new Bitmap(n, m, points);
    }
}

