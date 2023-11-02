import {ExerciseProgress} from "../ExerciseProgress/ExerciseProgress";
import {ExerciseInterface} from "../TrainingTimer";

interface Props {
    exercises: ExerciseInterface[];
    step: number;
    stage: number;
    element: number
}

export const Exercise = (props: Props) => {
    const {exercises, step, stage, element} = props;

    return step === stage ?
        <ExerciseProgress
            exercisesLength={exercises.length}
            exercise={exercises[element].exercise}
            pause={exercises[element].pause}
        /> : null
}