import './ExerciseProgress.css';
import {useContext, useState} from "react";
import audioFile from '../../../../../assets/sound.mp3';
import {RealStepContext, StepContext} from "../../../../../contexts/StepContext";
import {zerofill} from "../../../../../utils/zerofill";

interface Props {
    exercisesLength: number
    exercise: string;
    pause: number;
}

export const ExerciseProgress = (props: Props) => {
    const {exercisesLength, exercise, pause} = props;
    const {step, setStep} = useContext(StepContext);
    const {realStep, setRealStep} = useContext(RealStepContext);
    const [showPauseInfo, setShowPauseInfo] = useState(false);
    const [showDialog, setShowDialog] = useState(true);
    const [pauseCounter, setPauseCounter] = useState(0)

    const beep = async () => {
        const snd: HTMLAudioElement = new Audio(audioFile);
        await snd.play();
    };

    const timer = async (pauseTime: number) => {

        await (async () => {
            let sec = pauseTime;
            setPauseCounter(sec);

            const second = 1000; // milliseconds - default value 1000 (for full version)
            const seconder = setInterval(() => {
                sec--;
                setPauseCounter(sec);
            }, second);
            if (step === exercisesLength) {
                setTimeout(async () => {
                    clearInterval(seconder);
                    await beep();
                    const addStep = step + 1;
                    setStep(addStep);
                    setShowPauseInfo(false)
                }, 0);
            } else {
                setTimeout(async () => {
                    clearInterval(seconder);
                    await beep();
                    const addStep = step + 1;
                    setStep(addStep);
                    setShowPauseInfo(false)
                }, second * pauseTime);
            }

        })();

    }

    const exerciseDone = async () => {
        setShowPauseInfo(true)
        setShowDialog(false);
        const addRealStep = realStep + 1;
        setRealStep(addRealStep);
        await timer(pause);
    };

    return <div className="exercise-progress">

        {showDialog ? <div>
            <label>
                <p> Zrób {exercise}.</p>
                <p>Zrobione?</p>
            </label>
            <button onClick={exerciseDone}>Tak jest!</button>
        </div> : null}

        {showPauseInfo ? <div>
            <p> -= Pauza =- </p>
            <p>Całkowita długość przerwy: {Math.floor(pause / 60)}:{zerofill(pause)}</p>
            <p>Czekaj {Math.floor(pauseCounter / 60)}:{zerofill(pauseCounter)}</p>
        </div> : null}

    </div>
}