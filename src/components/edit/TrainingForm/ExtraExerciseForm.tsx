interface Props {
    labelName: string;
    exercise: string | undefined;
    pause: number | undefined;
    keyValueSuffix: string;
    updateForm: (exerciseCount: string, target: string | number) => void;
}

export const ExtraExerciseForm = (props: Props) => {
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
                    type="number"
                    value={props.pause ?? 0}
                    onChange={event => props.updateForm(
                        `pause${props.keyValueSuffix}`,
                        Number(event.target.value
                        ))}
                /> minut(y)
            </p>
        </label>
        <hr/>
    </div>
}