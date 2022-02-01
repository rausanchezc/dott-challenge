import {Challenge} from "./Challenge";
import {ChallengeInputReader} from "./services/ChallengeInputReader";
import {ChallengeOutputWriter} from "./services/ChallengeOutputWriter";

Challenge.createDefault(
    new ChallengeInputReader(process.stdin),
    new ChallengeOutputWriter(process.stdout)
).start();

