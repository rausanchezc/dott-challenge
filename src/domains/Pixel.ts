
export class Pixel {
    private readonly _x: number;
    private readonly _y: number;
    private readonly _isWhite: boolean;

    private constructor(x: number, y: number, isWhite: boolean) {

        if (x < 0 || y < 0) throw Error('Pixel coordinates (x,y) should be positive numbers');

        this._x = x;
        this._y = y;
        this._isWhite = isWhite;
    }

    get x(): number {
        return this._x;
    }

    get y():number{
        return this._y;
    }

    get isWhite():boolean {
        return this._isWhite;
    }

    distanceTo(p: Pixel): number {
        return Math.abs(this.x - p.x) + Math.abs(this.y - p.y);
    }

    static create(x: number, y: number, isWhite = false): Pixel {
        return new Pixel(x, y, isWhite);
    }
}