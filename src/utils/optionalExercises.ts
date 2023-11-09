import { TrainingEntity } from "types";

export interface OptionalExercises {
    labelName: string;
    keyValueSuffix: string;
    exercise: string | undefined;
    pause: number | undefined;
}

export const optionalExercises = (training: TrainingEntity) => [
    {
        labelName: 'Ćwiczenie drugie',
        keyValueSuffix: 'Two',
        exercise: training.exerciseTwo,
        pause: training.pauseTwo,
    },
    {
        labelName: 'Ćwiczenie trzecie',
        keyValueSuffix: 'Three',
        exercise: training.exerciseThree,
        pause: training.pauseThree,
    },
    {
        labelName: 'Ćwiczenie czwarte',
        keyValueSuffix: 'Four',
        exercise: training.exerciseFour,
        pause: training.pauseFour,
    },
    {
        labelName: 'Ćwiczenie piąte',
        keyValueSuffix: 'Five',
        exercise: training.exerciseFive,
        pause: training.pauseFive,
    },
    {
        labelName: 'Ćwiczenie szóste',
        keyValueSuffix: 'Six',
        exercise: training.exerciseSix,
        pause: training.pauseSix,
    },
    {
        labelName: 'Ćwiczenie siódme',
        keyValueSuffix: 'Seven',
        exercise: training.exerciseSeven,
        pause: training.pauseSeven,
    },
    {
        labelName: 'Ćwiczenie ósme',
        keyValueSuffix: 'Eight',
        exercise: training.exerciseEight,
        pause: training.pauseEight,
    },
    {
        labelName: 'Ćwiczenie dziewiąte',
        keyValueSuffix: 'Nine',
        exercise: training.exerciseNine,
        pause: training.pauseNine,
    },
    {
        labelName: 'Ćwiczenie dziesiąte',
        keyValueSuffix: 'Ten',
        exercise: training.exerciseTen,
        pause: training.pauseTen,
    },
]