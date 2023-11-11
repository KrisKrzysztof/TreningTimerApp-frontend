import './ExerciseProgress.css';
import {useContext, useState} from "react";
import audioPause from '../../../../../assets/whistle.mp3';
import audioFinish from '../../../../../assets/finish.mp3';
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

    const finalSound = async () => {
        const snd: HTMLAudioElement = new Audio(audioFinish);
        await snd.play();
    };

    const pauseSound = async () => {
        const snd: HTMLAudioElement = new Audio(audioPause);
        await snd.play();
    };

    const timer = async (pauseTime: number) => {

        await (async () => {
            let sec = pauseTime;
            setPauseCounter(sec);

            const second = 1000;
            const seconder = setInterval(() => {
                sec--;
                setPauseCounter(sec);
            }, second);
            if (step === exercisesLength) {
                setTimeout(async () => {
                    clearInterval(seconder);
                    await finalSound();
                    const addStep = step + 1;
                    setStep(addStep);
                    setShowPauseInfo(false)
                }, 0);
            } else {
                setTimeout(async () => {
                    clearInterval(seconder);
                    await pauseSound();
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

    // document.addEventListener('keydown', async event => {
    //     if (event.key === 'Enter'
    //         || event.key === 'Space'
    //         || event.code === undefined)
    //         await exerciseDone();
    // });

    return <div className="exercise-progress">

        {showDialog ? <div>
            <label>
                <p>Zrób <b>{exercise}</b>.</p>
                <p>Zrobione?</p>
            </label>
            <button onClick={exerciseDone}>Tak jest!</button>
        </div> : null}

        {showPauseInfo ? <div>
            <h3> -= Pauza =- </h3>
            <p>Czekaj <br/><p className='timer'> {Math.floor(pauseCounter / 60)}:{zerofill(pauseCounter)}</p></p>
            <p>Całkowita długość przerwy: {Math.floor(pause / 60)}:{zerofill(pause)}</p>
        </div> : null}

    </div>
}