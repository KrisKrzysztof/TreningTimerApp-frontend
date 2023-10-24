import {TrainingEntity} from "types";
import {useState} from "react";
import audioFile from '../../assets/sound.mp3';

interface Props {
    training: TrainingEntity;
}

export const TrainingTimer = (props: Props) => {
    const {training} = props;
    const [startBtnDisabled, setStartBtnDisabled] = useState(false);
    const [showStartInfo, setShowStartInfo] = useState('')
    const [seriesInfo, setSeriesInfo] = useState('^^^')
    const [hiddenDialogInfo, setHiddenDialogInfo] = useState('hidden');
    const [hiddenPauseInfo, setHiddenPauseInfo] = useState('hidden');
    const [exerciseTask, setExerciseTask] = useState(' A teraz robimy ...');
    const [counterStatus, setCounterStatus] = useState('Czekaj ... sekund');

    const startInfoClasses: string = `start-info ${showStartInfo}`;
    const dialogInfoClasses: string = `dialog-info ${hiddenDialogInfo}`;
    const pauseInfoClasses: string = `pause-info ${hiddenPauseInfo}`;

    const beep = async () => {
        const snd: HTMLAudioElement = new Audio(audioFile);
        await snd.play();
    };

    const showPauseInfo = () => {
        setHiddenPauseInfo('');
        setHiddenDialogInfo('hidden');
    }
    const showDialogInfo = () => {
        setHiddenDialogInfo('');
        setHiddenPauseInfo('hidden');
    };


    const pause = async (minutes: number) => {
        await (async () => {
            showPauseInfo();
            // field[step].style.background = '#3cc341'
            // step = step + 1;
            let i = minutes * 60;
            setCounterStatus(`Czekaj ${i} sekund`);
            // switch (step) {
            //     case 4:
            //         seriesInfo.innerText = 'Koniec serii pierwszej.';
            //         break;
            //     case 8:
            //         seriesInfo.innerText = 'Koniec serii drugiej.';
            //         break;
            //     case 12:
            //         seriesInfo.innerText = 'Koniec serii trzeciej.';
            //         break;
            // }
            // document.removeEventListener('keydown', pauseOne);
            // document.removeEventListener('keydown', pauseTwo);
            const second = 50; // milliseconds - default value 1000 (for full version)
            const seconder = setInterval(() => {
                i--;
                setCounterStatus(`Czekaj ${i} sekund`);
            }, second);
            setTimeout(async () => {
                clearInterval(seconder);
                await beep();
                // await switcher();
                showDialogInfo();
            }, 60 * second * minutes);
        })();
    }

    const waitForExerciseDone = (pauseTime: number): Promise<void> => new Promise<void>(async (resolve) => {
        await pause(pauseTime);
        const exerciseDoneConfirmation = () => {
            button?.removeEventListener("click", exerciseDoneConfirmation);
            document.removeEventListener('keydown', (event) => {
                if (event.key === 'Enter'
                    || event.key === 'Space'
                    || event.code === undefined) {
                    exerciseDoneConfirmation();
                }
            });
            resolve();
        };
        const button = document.getElementById("btn-done");
        button?.addEventListener("click", exerciseDoneConfirmation);
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Enter'
                || event.key === 'Space'
                || event.code === undefined) {
                exerciseDoneConfirmation();
            }
        });
    });

    const exercise = async (exercise: string, pauseTime: number) => {
        if (exercise === 'Koniec') {
            console.log(`Koniec serii `);
            setSeriesInfo('Seria druga.'); // todo
        }
        showDialogInfo();
        setExerciseTask(`${exercise}`);
        await waitForExerciseDone(pauseTime);
    };

    const start = async () => {
        setStartBtnDisabled(true);
        setShowStartInfo('hidden');
        setSeriesInfo('Seria pierwsza.');
        await exercise(training.exerciseOne, training.pauseOne);
        await exercise(training.exerciseTwo ?? 'Koniec', training.pauseTwo ?? 0);
        await exercise(training.exerciseThree ?? 'Koniec', training.pauseThree ?? 0);
        await exercise(training.exerciseFour ?? 'Koniec', training.pauseFour ?? 0);
        await exercise(training.exerciseFive ?? 'Koniec', training.pauseFive ?? 0);
        await exercise(training.exerciseSix ?? 'Koniec', training.pauseSix ?? 0);
        await exercise(training.exerciseSeven ?? 'Koniec', training.pauseSeven ?? 0);
        await exercise(training.exerciseEight ?? 'Koniec', training.pauseEight ?? 0);
        await exercise(training.exerciseNine ?? 'Koniec', training.pauseNine ?? 0);
        await exercise(training.exerciseTen ?? 'Koniec', training.pauseTen ?? 0);
    };


    return <div className='trainin-div'>
        [strona w budowie]

        <h1> TRENING </h1>
        <h2> {training.name} </h2>

        <button
            id="btn-start"
            disabled={startBtnDisabled}
            onClick={start}> Start! </button>

        <div className="general-info">

            <h2 className="series-info" >{seriesInfo}</h2>

            <h3 className={startInfoClasses}> Kliknij "Start!" aby rozpocząć. </h3>

            <div className={pauseInfoClasses}>

                <p> Czas na odpoczynek. </p>

                <div className="info-content">
                    <p className="pause-marker"> -= Pauza =- </p>
                    <p className="pause-counter">{counterStatus}</p>
                </div>

            </div>

            <div className={dialogInfoClasses}>

                <p id="exercise-task" className="what-to-do">{exerciseTask}</p>

                <div className="info-content">
                    <p className="what-to-do-ask"> zrobione? </p>
                    <button
                        id="btn-done"
                    >Jedziemy dalej!</button>
                </div>

            </div>

        </div>

        <div className="progress-table">
            <h2> --== Podgląd postępu ==-- </h2>

            <div>
                <div id="column-1" className="column">
                    <h3> Seria pierwsza </h3>
                    <p className="field"> ćwiczenie jeden </p>
                    <p className="field"> ćwiczenie dwa </p>
                    <p className="field"> ćwiczenie trzy </p>
                    <p className="field"> ćwiczenie cztery </p>
                </div>

                <div id="column-2" className="column">
                    <h3> Seria druga </h3>
                    <p className="field"> ćwiczenie jeden </p>
                    <p className="field"> ćwiczenie dwa</p>
                    <p className="field"> ćwiczenie trzy </p>
                    <p className="field"> ćwiczenie cztery </p>
                </div>
                <div className="exClear"></div>
            </div>

            <div>
                <div id="column-3" className="column">
                    <h3> Seria trzecia </h3>
                    <p className="field"> ćwiczenie jeden </p>
                    <p className="field"> ćwiczenie dwa </p>
                    <p className="field"> ćwiczenie trzy </p>
                    <p className="field"> ćwiczenie cztery </p>
                </div>

                <div id="column-4" className="column">
                    <h3> Seria czwarta </h3>
                    <p className="field"> ćwiczenie jeden </p>
                    <p className="field"> ćwiczenie dwa </p>
                    <p className="field"> ćwiczenie trzy </p>
                    <p className="field"> ćwiczenie cztery </p>
                </div>
                <div className="exClear"></div>
            </div>

        </div>

    </div>
}