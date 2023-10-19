import { TrainingEntity } from "types";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {apiUrl} from "../../config/api";


export const Modify = () => {
    const [training, setTraining] = useState<TrainingEntity>({
        id: '',
        name: '',
        description: null,
        numberOfSeries: 1,
        exerciseOne: '',
        pauseOne: 1,
    });

    let {id} = useParams();

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/trainings/${id}`);
            const data = await res.json();

            setTraining(data);
        })();
    }, []);

    if (!training) {
        return <p>Trening o podanym ID nie istnieje.</p>
    }

    const updateForm = (key: string, value: any) => {
        setTraining({
            ...training,
            [key]: value,
        })
    }

    return <div className='page'>
        <h3>Edycja treningu: "{training.name}"</h3>
        <form className='modify-form'>
            <label>
                <p className="inp-p-basic">Nazwa: </p>
                <input
                    required
                    type="text"
                    value={training.name}
                    onChange={event => updateForm('name', event.target.value)}/>
            </label>
            <label>
                <p className="inp-p-basic">Opis: </p>
                <textarea
                    rows={3}
                    cols={60}
                    value={training.description ? training.description : ''}
                    onChange={event => updateForm('description', event.target.value)}/>
            </label>
            <label>
                <p className='inp-p-num'>Liczba serii: </p>
                <input
                    required
                    className='inp-num'
                    type="number"
                    value={training.numberOfSeries}
                    onChange={event => updateForm('numberOfSeries', Number(event.target.value))}/>
            </label>
            <h4>Lista ćwiczeń w każdej serii</h4>
            <label>
                <p>Ćwiczenie pierwsze: </p>
                <input
                    required
                    type="text"
                    value={training.exerciseOne}
                    onChange={event => updateForm('exerciseOne', Number(event.target.value))}/>
            </label>
            <label>
                <p className='inp-p-num'>Pauza: <> </>
                <input
                    required
                    className='inp-num'
                    type="number"
                    value={training.pauseOne}
                    onChange={event => updateForm('pauseOne', Number(event.target.value))}/> minuty</p>
            </label>


        </form>


        [strona w budowie]
        <hr/>
        brudnopis
        <p>Nazwa: {training.name}</p>
        <p>Opis: {training.description}</p>
        <p>Liczba serii: {training.numberOfSeries}</p>
        <p>ćwiczenie {training.exerciseOne}</p>
        <p>pauza {training.pauseOne}</p>
        <p>ćwiczenie{training.exerciseTwo}</p>
        <p>pauza {training.pauseTwo}</p>
        <p>ćwiczenie{training.exerciseThree}</p>
        <p>pauza {training.pauseThree}</p>
        <p>ćwiczenie {training.exerciseFour}</p>
        <p>pauza {training.pauseFour}</p>
        <p>ćwiczenie {training.exerciseFive}</p>
        <p>pauza {training.pauseFive}</p>
        <p>ćwiczenie {training.exerciseSix}</p>
        <p>pauza {training.pauseSix}</p>
        <p>ćwiczenie {training.exerciseSeven}</p>
        <p>pauza {training.pauseSeven}</p>
        <p>ćwiczenie {training.exerciseEight}</p>
        <p>pauza {training.pauseEight}</p>
        <p>ćwiczenie {training.exerciseNine}</p>
        <p>pauza {training.pauseNine}</p>
        <p>ćwiczenie {training.exerciseTen}</p>
        <p>pauza {training.pauseTen}</p>

    </div>
}