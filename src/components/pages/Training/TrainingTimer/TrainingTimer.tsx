import './TrainingTimer.css';
import {TrainingEntity} from "types";
import {useEffect, useState} from "react";
import {RealStepContext, StepContext} from "../../../../contexts/StepContext";
import {TrainingsList} from "../../../common/TrainingsList/TrainingsList";
import {Exercise} from "./Exercise/Exercise";

interface Props {
    training: TrainingEntity;
}

export interface ExerciseInterface {
    exercise: string;
    pause: number;
}

export const TrainingTimer = (props: Props) => {
    const {training} = props;

    const [trainingStarted, setTrainingStarted] = useState(false);
    const [step, setStep] = useState(0);
    const [realStep, setRealStep] = useState(0);

    let [serieInfo, setSerieInfo] = useState('^^^')
    let [exercises] = useState<ExerciseInterface[]>([]);

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
        );
        if (training.exerciseThree && training.pauseThree) exercises.push(
            {
                exercise: training.exerciseThree,
                pause: training.pauseThree,
            },
        );
        if (training.exerciseFour && training.pauseFour) exercises.push(
            {
                exercise: training.exerciseFour,
                pause: training.pauseFour,
            },
        );
        if (training.exerciseFive && training.pauseFive) exercises.push(
            {
                exercise: training.exerciseFive,
                pause: training.pauseFive,
            },
        );
        if (training.exerciseSix && training.pauseSix) exercises.push(
            {
                exercise: training.exerciseSix,
                pause: training.pauseSix,
            },
        );
        if (training.exerciseSeven && training.pauseSeven) exercises.push(
            {
                exercise: training.exerciseSeven,
                pause: training.pauseSeven,
            },
        );
        if (training.exerciseEight && training.pauseEight) exercises.push(
            {
                exercise: training.exerciseEight,
                pause: training.pauseEight,
            },
        );
        if (training.exerciseNine && training.pauseNine) exercises.push(
            {
                exercise: training.exerciseNine,
                pause: training.pauseNine,
            },
        );
        if (training.exerciseTen && training.pauseTen) exercises.push(
            {
                exercise: training.exerciseTen,
                pause: training.pauseTen,
            },
        );
    }

    useEffect(() => {
        for (let i = 0; i < training.numberOfSeries; i++) {
            makeSerie();
        }
    }, []);

    useEffect(() => {
        if (realStep) {
            document.getElementById(realStep.toString())?.classList.remove('red');
            document.getElementById(realStep.toString())?.classList.add('green');
        }
    }, [realStep]);


    const start = () => {
        setTrainingStarted(true);
        setStep(1);
        setRealStep(0);
        setSerieInfo('Seria pierwsza.')
    }

    const serie = () => {
        return exercises.map((el, i) => {
            return <div key={i}>
                <RealStepContext.Provider value={{realStep, setRealStep}}>
                <StepContext.Provider value={{step, setStep}}>
                    <Exercise
                        exercises={exercises}
                        step={step}
                        stage={i + 1}
                        element={i}/>
                </StepContext.Provider>
                </RealStepContext.Provider>
            </div>
        })
    }

    const progress = () => {
        if (step === exercises.length + 1) {
            return <div>
                <h4> 😊😎🥳 Dobra robota! 🥳😎😊 <br/> 💪💪 💪💪 </h4>
                <small>Odśwież stronę, aby rozpocząć nowy trening,<br/>lub wybierz dowolną opcję z menu u góry, jeśli chcesz zrobić coś innego.</small>
            </div>
        }
        return serie();
    }

    const progresField = () => {
        let fields: number[] = [];
        for (let i = 1; i < exercises.length+1; i++) {
            fields = [...fields, i];
        }
        return <div className="progress-fields">
            {fields.map(element => {
                return <div
                    key={element}
                    id={element.toString()}
                    className="progress-field red">
                </div>
            })}
        </div>
    }

    if (step >= exercises.length / training.numberOfSeries + 1) {
        serieInfo = 'Seria druga.'
    }
    if (step >= (exercises.length / training.numberOfSeries + 1) +
        (exercises.length / training.numberOfSeries)) {
        serieInfo = 'Seria trzecia.'
    }
    if (step >= (exercises.length / training.numberOfSeries + 1) +
        (exercises.length / training.numberOfSeries) * 2) {
        serieInfo = 'Seria czwarta.'
    }
    if (step >= (exercises.length / training.numberOfSeries + 1) +
        (exercises.length / training.numberOfSeries) * 3) {
        serieInfo = 'Seria piąta.'
    }
    if (step >= (exercises.length / training.numberOfSeries + 1) +
        (exercises.length / training.numberOfSeries) * 4) {
        serieInfo = 'Seria szósta.'
    }
    if (step >= (exercises.length / training.numberOfSeries + 1) +
        (exercises.length / training.numberOfSeries) * 5) {
        serieInfo = 'Seria siódma.'
    }
    if (step >= (exercises.length / training.numberOfSeries + 1) +
        (exercises.length / training.numberOfSeries) * 6) {
        serieInfo = 'Seria ósma.'
    }
    if (step >= (exercises.length / training.numberOfSeries + 1) +
        (exercises.length / training.numberOfSeries) * 7) {
        serieInfo = 'Seria dziewiąta.'
    }
    if (step >= (exercises.length / training.numberOfSeries + 1) +
        (exercises.length / training.numberOfSeries) * 8) {
        serieInfo = 'Seria dziesiąta.'
    }
    if (step >= exercises.length + 1) {
        serieInfo = 'Koniec treningu!'
    }

    return <div className='training-page'>

        <div className='training-div'>

            <div className='training-name'>
                <h2> TRENING </h2>
                <h1> {training.name} </h1>
            </div>


            <button
                className={trainingStarted ? 'hidden' : 'block'}
                onClick={start}> START!
            </button>
            <h3> {serieInfo} </h3>
            <h2 className={trainingStarted ? 'hidden' : 'block'}>
                Kliknij "Start!" aby rozpocząć.</h2>

            {progress()}

        </div>
        <hr/>

            <div className='progress-view'>
                <h4>Podgląd postępu</h4>
                <p className={trainingStarted ? 'hidden' : 'block'}>Kiedy rozpoczniesz trening, tutaj pojawi się podgląd postępu</p>
                {progresField()}
            </div>

        <div className='training-preview'>

            <hr/>
            <TrainingsList
                nameAndDescription={false}
                onListChange={() => ''}
                trainingList={[training]}
                modify={false}
                details={true}/>

        </div>

    </div>
}