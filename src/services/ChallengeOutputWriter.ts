import {DistanceMatrix} from "../domains";
import {OutputWriter} from "./OutputWriter";
import {Writable} from "stream";

export class ChallengeOutputWriter implements OutputWriter<DistanceMatrix> {
    private _output: Writable;

    constructor(output: Writable) {
        this._output = output;
        this.setup();
    }

    async write(data: DistanceMatrix): Promise<void> {
        const that = this;

        new Promise<void>( function (resolve) {
            that._output.write(data.stringify(), () => {resolve()})
        });
    }

    private setup(): void {
        this._output.setDefaultEncoding('utf-8');
    }
    
}