import {Bitmap, ChallengeInput, Metadata} from "../../../domains";

describe('When creating ChallengeInput with VALID parameters', () => {
    const nTests = 1, nValue = 2, mValue = 2;
    const matrix: string[] = ["01", "10"];

    const metadata = Metadata.create(nTests, nValue, mValue);
    const bitmap = Bitmap.create(nValue, mValue, matrix);

    it('A new ChallengeInput should be created', () => {
        const challengeInput = new ChallengeInput(metadata, [bitmap]);

        expect(challengeInput).toBeInstanceOf(ChallengeInput);
        expect(challengeInput.metadata).toBe(metadata);
        expect(challengeInput.tests).toStrictEqual([bitmap]);
    });
});
