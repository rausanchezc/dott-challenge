import { Bitmap, Metadata } from "../domains";

export class ChallengeInput {
    private readonly _metadata: Metadata;
    private readonly _tests: Bitmap[];

    constructor(metadata: Metadata, tests: Bitmap[]) {
        this._metadata = metadata;
        this._tests = tests;
    };

    get metadata(): Metadata {
        return this._metadata;
    };

    get tests(): Bitmap[] {
        return this._tests;
    };
}