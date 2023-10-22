import { TrainingEntity } from "types";

interface Props {
    training: TrainingEntity;
    updateForm: (exerciseCount: string, target: string | number) => void;
}

export const BasicRequiredForm = (props: Props) => {
    return <div>
        <label>
            <p className="label-p-basic">Nazwa: </p>
            <input
                className="label-p-basic"
                required
                type="text"
                value={props.training.name}
                onChange={event => props.updateForm('name', event.target.value)}/>
        </label><br/>
        <label>
            <p>Opis treningu: </p>
            <textarea
                rows={2}
                cols={60}
                value={props.training.description || ''}
                onChange={event => props.updateForm('description', event.target.value)}/>
        </label><br/>
        <label>
            <p className='label-p-num'>Liczba serii: </p>
            <input
                required
                className='label-inp-num'
                min={0}
                max={10}
                type="number"
                value={props.training.numberOfSeries}
                onChange={event => props.updateForm('numberOfSeries', Number(event.target.value))}/>
        </label><br/>
        <h4>Lista ćwiczeń w każdej serii</h4>
        <small className="small-form">Możesz dodać do dziesięciu ćwiczeń, minimum jedno.</small>
        <br/>
        <div>
            <label>
                <p>Ćwiczenie pierwsze: </p>
                <input
                    required
                    type="text"
                    value={props.training.exerciseOne}
                    onChange={event => props.updateForm('exerciseOne', event.target.value)}/>
            </label><br/>
            <label>
                <p className='label-p-num'>Pauza: <> </>
                    <input
                        required
                        className='label-inp-num'
                        type="number"
                        value={props.training.pauseOne}
                        onChange={event => props.updateForm('pauseOne', Number(event.target.value))}/> minut(y)</p>
            </label><hr/>
        </div>
    </div>
}