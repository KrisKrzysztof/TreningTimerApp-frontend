import {useEffect, useState} from "react";
import {apiUrl} from "../../config/api";
import {TrainingEntity} from 'types';

export const MainPage = () => {
    const [trainings, setTrainings] = useState<TrainingEntity[]>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/trainings`);
            const data = await res.json();

            setTrainings(data);

        })();
    }, [])

    return <div className="page">
        <h1>To jest strona główna</h1>
        <p>Znajdziesz tu podgląd dostępnych treningów.</p>
        <p><strong>Timer Training APP</strong><br/>To aplikacja służąca do
            zaawansowanego odmierzania przerw pomiędzy poszczególnymi ćwiczeniami w treningu, <br/>przede wszystkim chodzi o to, że można ustawić różnej długości przerw dla różnych ćwiczeń.</p>
        <p>Możesz też dodać swój własny trening wybierając odpowiednią sekcję z
            menu.</p>
        <h2>WYBIERZ Z MENU U GÓRY CO CHCESZ ZROBIĆ</h2>
        <p>Poniżej znajdziesz aktualną listę treningów z krótkim opisem (jeśli dodano):</p>
        <ul>
            {trainings.map(training =>
                <li key={training.id}>
                    <p><strong>{training.name}</strong><br/>{training.description || 'Brak opisu.'}</p>
                    {/*<p>*/}
                    {/*    Trening składa się z {training.numberOfSeries} serii.<br/>*/}
                    {/*    Jedna seria składa się z następujących ćwiczeń:<br/>*/}
                    {/*    <li>{training.exerciseOne}</li>*/}
                    {/*    <li>{training.exerciseOne}</li>*/}
                    {/*    <li>{training.exerciseTwo}</li>*/}
                    {/*    <li>{training.exerciseThree}</li>*/}
                    {/*    <li>{training.exerciseFour}</li>*/}
                    {/*    <li>{training.exerciseFive}</li>*/}
                    {/*    <li>{training.exerciseSix}</li>*/}
                    {/*    <li>{training.exerciseSeven}</li>*/}
                    {/*    <li>{training.exerciseEight}</li>*/}
                    {/*    <li>{training.exerciseNine}</li>*/}
                    {/*    <li>{training.exerciseTen}</li>*/}
                    {/*</p>*/}
                </li>
            )}
        </ul>
    </div>
}