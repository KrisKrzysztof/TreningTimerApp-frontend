import {TrainingEntity} from "types";
import {useEffect, useState} from "react";
import {ExerciseProgress} from "./ExerciseProgress";
import {StepContext} from "../../contexts/StepContext";

interface Props {
    training: TrainingEntity;
}
interface Exercise {
    exercise: string;
    pause: number;
}

export const TrainingTimer = (props: Props) => {
        const {training} = props;
    const [trainingStarted, setTrainingStarted] = useState(false);
    const [step, setStep] = useState(0);
    const [seriesRemaining, setSeriesRemaining] = useState(training.numberOfSeries);
    const [exercises] = useState<Exercise[]>([]);

    const makeSerie = () => {
        exercises.push({
            exercise: training.exerciseOne,
            pause: training.pauseOne,
        },);
        if (training.exerciseTwo && training.pauseTwo) exercises.push(
            {
                exercise: training.exerciseTwo,
                pause: training.pauseTwo,
            },
        )
        if (training.exerciseThree && training.pauseThree) exercises.push(
            {
                exercise: training.exerciseThree,
                pause: training.pauseThree,
            },
        )
        if (training.exerciseFour && training.pauseFour) exercises.push(
            {
                exercise: training.exerciseFour,
                pause: training.pauseFour,
            },
        )
    }

    useEffect(() => {
        // użyć fori żeby stworzyć tablicę całego treningu
        makeSerie();

        // setExercises(exercises);
        // console.log(exercises); // uwaga! Wyłączyć React.StrictMode
    }, []);


    const start = () => {
        setTrainingStarted(true);
        setStep(1);
    }

    const exercise = (stage: number, i: number) => {
        return step === stage ?
            <ExerciseProgress
                exercise={exercises[i].exercise}
                pause={exercises[i].pause}
            /> : null
    }

    const serie = () => {
        return exercises.map((el, i) => {
            if (step === exercises.length+1) {
                console.log(' krok ' + step);
                const series = seriesRemaining - 1;
                setSeriesRemaining(series);
                setStep(0);
            }
            return <div key={i}>
                <StepContext.Provider value={{step, setStep}}>
                    {exercise(i + 1, i)}
                </StepContext.Provider>
            </div>
        })
    }

    const progress = () => {


        // const series = () => {
        //     const seriesComponents = [];
        //
        //     for (let i = 0; i < seriesRemaining; i++) {
        //         seriesComponents.push(i);
        //     }
        //
        //     return seriesComponents;
        // }
        // const seriesArray = series();
        // return seriesArray.map((el,i) =>{
        //     if (seriesRemaining > 0) {
        //         return <div key={i}>
        //             {serie()}
        //         </div>;
        //     }
        //     return <p> Koniec treningu. </p>
        // })


        // if (seriesRemaining === 0) {
        //     return <p>koniec treningu</p>
        // }

        // for (let i = training.numberOfSeries; i <= 0; i--) {
        //     serie();
        // }


        // if (step === exercises.length+1) {
        //     console.log(' krok ' + step);
        //     const series = seriesRemaining - 1;
        //     setSeriesRemaining(series);
        //     setStep(0);
        //     // return serie();
        // }
        return serie();
    }

    // const render = () => {
    //     const series = () => {
    //         const seriesComponents = [];
    //
    //         for (let i = 0; i < seriesRemaining; i++) {
    //             seriesComponents.push(i);
    //         }
    //
    //         return seriesComponents;
    //     }
    //     const seriesArray = series();
    //     return seriesArray.map((el,i) =>{
    //         if (seriesRemaining > 0) {
    //             return <div key={i}>
    //                 {serie()}
    //             </div>;
    //         }
    //         return <p> Koniec treningu. </p>
    //     })
    // }

    return <div className='training-div'>
        [strona w budowie]

        <h1> TRENING </h1>
        <h2> {training.name} </h2>

        <button
            disabled={trainingStarted}
            onClick={start}> Start!
        </button>

        {progress()}

        {/*{render()}*/}



        {/*<StepContext.Provider value={{step, setStep}}>*/}


        {/*    {progress()}*/}

        {/*    /!*{exercise(1, 0)}*!/*/}
        {/*    /!*{exercise(2, 1)}*!/*/}
        {/*    /!*{exercise(3, 2)}*!/*/}

        {/*    /!*{exercises.map((el, i) => {*!/*/}
        {/*    /!*    *!/*/}
        {/*    /!*    exercise(i+1, i);*!/*/}
        {/*    /!*    *!/*/}
        {/*    /!*})}*!/*/}


        {/*</StepContext.Provider>*/}

        <p>krok: {step}</p>
        <p>serie pozostałe: {seriesRemaining}</p>

        <p>ćw: {JSON.stringify(exercises)}</p>

    </div>
}