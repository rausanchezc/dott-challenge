import { InputReader } from "./InputReader";
import { Bitmap, ChallengeInput, Metadata } from "../domains";
import { EOL } from "os";

export class ChallengeInputReader implements InputReader<ChallengeInput> {

    private input: NodeJS.ReadStream;

    constructor(input: NodeJS.ReadStream) {
        this.input = input;
        this.setup();
    }

    async read(): Promise<ChallengeInput> {
        const that = this;
        let data = "";

        return new Promise<ChallengeInput>(function (resolve) {
            that.input
                .on('data', (inputData) =>  data += inputData)
                .on('end', () => resolve(ChallengeInputReader.processStream(data)))
        });
    };

    private static processStream(data: string): ChallengeInput {
        const rows = data.split(EOL).filter(r => r.length > 0);
        const metadata = ChallengeInputReader.extractMetadata(rows.splice(0, 2));
        const tests = ChallengeInputReader.extractBitmaps(metadata, rows);

        return new ChallengeInput(metadata, tests);
    };

    private static extractMetadata(content: string[]): Metadata {
        const nTestsInput = content[0];
        const [nInput, mInput] = content[1].split(" ");

        return Metadata.create(
            Number.parseInt(nTestsInput),
            Number.parseInt(nInput),
            Number.parseInt(mInput)
        )
    };

    private static extractBitmaps({ numberOfTests, n, m }: Metadata, content: string[]): Bitmap[] {
        let i = 0;
        const tests: Bitmap[] = new Array<Bitmap>();

        while (i < numberOfTests * n) {
            const rows = content.slice(i, i+n);
            tests.push(Bitmap.create(n, m, rows));
            i += n;
        }

        return tests;
    };

    private setup() {
        this.input.resume();
        this.input.setEncoding("utf-8");
    };
}