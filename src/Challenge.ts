import { ChallengeInput, DistanceMatrix } from "./domains";
import { InputReader } from "./services/InputReader";
import {OutputWriter} from "./services/OutputWriter";

export class Challenge {

    static readonly N_TEST_MAX = 1000;
    static readonly N_TEST_MIN = 0;

    private _inputReader: InputReader<ChallengeInput>;
    private _outputWriter: OutputWriter<DistanceMatrix>
    private readonly _maxNumberTests: number;
    private readonly _minNumberTests: number;

    private constructor(
        maxNumberTests: number,
        minNumberTests: number,
        inputReader: InputReader<ChallengeInput>,
        outputWriter: OutputWriter<DistanceMatrix>
    )
    {
        if (maxNumberTests < 0 || minNumberTests < 0) throw Error('Max/Min # of tests should be positive numbers');
        if (maxNumberTests < minNumberTests) throw Error('Max # of tests should be >= Min # of tests');

        this._maxNumberTests = maxNumberTests;
        this._minNumberTests = minNumberTests;
        this._inputReader = inputReader;
        this._outputWriter = outputWriter;
    }

    async start() {
        const { metadata, tests }: ChallengeInput = await this._inputReader.read();

        const nTest = metadata.numberOfTests;

        if (Number.isNaN(nTest)
            || Number(nTest) <= this._minNumberTests
            || Number(nTest) > this._maxNumberTests
        ) throw Error('Invalid number of tests');

        tests.forEach(test => {
            const matrix = test.calculateMinDistanceMatrix();
            this._outputWriter.write(new DistanceMatrix(test.n, test.m, matrix));
        })
    };

    static createDefault(inputReader: InputReader<ChallengeInput>, outputWriter: OutputWriter<DistanceMatrix>): Challenge {
        return new Challenge(Challenge.N_TEST_MAX, Challenge.N_TEST_MIN, inputReader, outputWriter);
    };
}