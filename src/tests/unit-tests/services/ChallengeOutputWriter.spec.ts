import {ChallengeOutputWriter} from "../../../services/ChallengeOutputWriter";
import {Writable} from "stream";
import exp from "constants";
import {DistanceMatrix} from "../../../domains";



describe('When creating a new ChallengeOutputWriter', () => {
    it('A new ChallengeOutputWriter object should be created', () => {

        const outputWriter = new ChallengeOutputWriter(new Writable());

        expect(outputWriter).toBeInstanceOf(ChallengeOutputWriter);
    });
});

describe('When writing to output', () => {
    it('The output should match the internal representation', () => {

        const nValue = 1, mValue = 1;
        const matrix: number[][] = [[4]];
        const outputWriter = new ChallengeOutputWriter(new Writable());
        const distanceMatrix = new DistanceMatrix(nValue, mValue, matrix);

        expect(outputWriter).toBeInstanceOf(ChallengeOutputWriter);
        expect(outputWriter.write(distanceMatrix)).resolves.not.toThrow();

    });
});