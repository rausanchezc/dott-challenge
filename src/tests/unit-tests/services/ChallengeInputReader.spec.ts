import {ChallengeInputReader} from "../../../services/ChallengeInputReader";
import {Readable} from "stream";
import {Bitmap, ChallengeInput, Metadata} from "../../../domains";

describe('When creating a new ChallengeInputReader', () => {

    it('A new ChallengeInputReader object should be created', () => {

        const input = Readable.from("Hello there");

        const inputReader = new ChallengeInputReader(input);

        expect(inputReader).toBeInstanceOf(ChallengeInputReader);
    });

});

describe('When reading from input', () => {

    it('The raw input should match ChallengeInputReader representation', async () => {

        const text = "1\n1 1\n1\n";
        const input = Readable.from(text);

        const inputReader = new ChallengeInputReader(input);

        const challengeInput = await inputReader.read();
        expect(challengeInput).toBeInstanceOf(ChallengeInput);
        expect(challengeInput.metadata).toEqual(Metadata.create(1, 1, 1));
        expect(challengeInput.tests).toHaveLength(1);
        expect(challengeInput.tests).toEqual([Bitmap.create(1, 1, ["1"])]);
    });

});