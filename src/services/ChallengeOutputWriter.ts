import {DistanceMatrix} from "../domains";
import {OutputWriter} from "./OutputWriter";

export class ChallengeOutputWriter implements OutputWriter<DistanceMatrix> {
    private _output: NodeJS.WriteStream;

    constructor(output: NodeJS.WriteStream) {
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
        this._output.setEncoding('utf-8');
    }
    
}