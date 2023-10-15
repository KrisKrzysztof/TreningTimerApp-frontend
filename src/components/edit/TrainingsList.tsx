import { TrainingEntity } from "types";
import React from "react";

interface Props {
    details: boolean;
    trainingList: TrainingEntity[];
}

export const TrainingsList = (props: Props) => {

    if (props.trainingList[0] === undefined) {
        return <p>[ Ładowanie... ]</p>
    }

    return <ul>
        {props.trainingList.map(training =>
            <li key={training.id}>
                <p><strong>{training.name}</strong><br/>{training.description ||
                    'Brak opisu.'}</p>
                {props.details ?
                    <small className="exercises-list">
                        <p>Trening składa się z {training.numberOfSeries} serii.<br/>
                            Jedna seria składa się z następujących ćwiczeń:<br/></p>
                        {training.exerciseOne ? <p>{training.exerciseOne}</p> : null}
                        {training.exerciseTwo ? <p>{training.exerciseTwo}</p> : null}
                        {training.exerciseThree ? <p>{training.exerciseThree}</p> : null}
                        {training.exerciseFour ? <p>{training.exerciseFour}</p> : null}
                        {training.exerciseFive ? <p>{training.exerciseFive}</p> : null}
                        {training.exerciseSix ? <p>{training.exerciseSix}</p> : null}
                        {training.exerciseSeven ? <p>{training.exerciseSeven}</p> : null}
                        {training.exerciseEight ? <p>{training.exerciseEight}</p> : null}
                        {training.exerciseNine ? <p>{training.exerciseNine}</p> : null}
                        {training.exerciseTen ? <p>{training.exerciseTen}</p> : null}
                    </small>
                    : null}
            </li>
        )}
    </ul>
}