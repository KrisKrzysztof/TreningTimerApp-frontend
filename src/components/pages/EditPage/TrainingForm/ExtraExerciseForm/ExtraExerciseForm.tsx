import {useEffect, useState} from "react";

interface Props {
    labelName: string;
    exercise: string | undefined;
    pause: number | undefined;
    keyValueSuffix: string;
    updateForm: (exerciseCount: string, target: string | number) => void;
}

export const ExtraExerciseForm = (props: Props) => {
    const [pauseTime, setPauseTime] = useState(props.pause ?? 0);
    const [minutes, setMinutes] = useState(Math.floor(pauseTime / 60));
    const [seconds, setSeconds] = useState(pauseTime % 60);

    useEffect(() => {
        setPauseTime(props.pause ?? 0);
    }, []);

    useEffect(() => {
        setPauseTime(minutes * 60 + seconds);
        props.updateForm(
            `pause${props.keyValueSuffix}`,
            minutes * 60 + seconds,
        );
    }, [seconds, minutes]);

    return <div key={props.labelName}>

        <label>
            <p>{props.labelName}: </p>
            <input
                type="text"
                value={props.exercise ?? ''}
                onChange={event => props.updateForm(
                    `exercise${props.keyValueSuffix}`,
                    event.target.value)}
            />
        </label><br/>

        <label>
            <p className='label-p-num'>Pauza: <> </>
                <input
                    className='label-inp-num'
                    min={0}
                    max={10}
                    type="number"
                    value={minutes}
                    onChange={ event =>
                        setMinutes(Number(event.target.value))
                    }
                /> minut <> </>
                <input
                    className='label-inp-num'
                    min={0}
                    max={59}
                    step={5}
                    type="number"
                    value={seconds}
                    onChange={ event =>
                        setSeconds(Number(event.target.value))
                    }
                /> sekund.
            </p>
        </label>

        <hr/>
    </div>
}