import {useContext, useState} from "react";
import audioFile from '../../assets/sound.mp3';
import {StepContext} from "../../contexts/StepContext";

interface Props {
    exercise: string;
    pause: number;
}

export const ExerciseProgress = (props: Props) => {
    const {exercise, pause} = props;
    const {step, setStep} = useContext(StepContext);
    const [showPauseInfo, setShowPauseInfo] = useState(false);
    const [showDialog, setShowDialog] = useState(true);
    const [pauseCounter, setPauseCounter] = useState('Czekaj ... sekund')

    const beep = async () => {
        const snd: HTMLAudioElement = new Audio(audioFile);
        await snd.play();
    };

    const timer = async (pauseTime: number) => {
        await (async () => {
            let i = pauseTime * 60;
            setPauseCounter(`Czekaj ${i} sekund`);

            const second = 50; // milliseconds - default value 1000 (for full version)
            const seconder = setInterval(() => {
                i--;
                setPauseCounter(`Czekaj ${i} sekund`);
            }, second);
            setTimeout(async () => {
                clearInterval(seconder);
                await beep();
                const addStep = step + 1;
                setStep(addStep);
                setShowPauseInfo(false)
            }, 60 * second * pauseTime);
        })();

    }

    const exerciseDone = async () => {
        setShowPauseInfo(true)
        setShowDialog(false);
        await timer(pause);
    };

    return <div className="progress">

        {showDialog ? <div>
            <label>
                <p> Zrób {exercise}.</p>
                <p>Zrobione?</p>
            </label>
            <button onClick={exerciseDone}>Jedziemy dalej!</button>
        </div> : null}

        {showPauseInfo ? <div>
            <p>Przerwa: {pause}</p>
            <p> -= Pauza =- </p>
            <p> {pauseCounter} </p>
        </div> : null}

    </div>
}