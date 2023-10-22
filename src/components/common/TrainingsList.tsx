import { TrainingEntity } from "types";
import React from "react";
import {ButtonDelete} from "./ButtonDelete";
import {ButtonModify} from "./ButtonModify";
import {Spinner} from "./Spinner/Spinner";

interface Props {
    details: boolean;
    modify: boolean;
    trainingList: TrainingEntity[];
    onListChange: () => void;
}

export const TrainingsList = (props: Props) => {

    if (props.trainingList[0] === undefined) {
        return <Spinner/>
    }

    return <ul className="training-list">
        {props.trainingList.map(training =>
            <li key={training.id}>

                <h3>{training.name}</h3>
                <p>{training.description ||
                    'Brak opisu.'}</p>

                {props.modify && !training.id.startsWith('protected') ?
                    <ButtonModify toModify={training}/> : null}

                {props.modify && !training.id.startsWith('protected') ?
                    <ButtonDelete toDelete={training}
                                  onListChange={props.onListChange}/> : null}

                {props.modify && training.id.startsWith('protected') ? <p>[Ten trening jest chroniony, nie można go usunąć ani modyfikować.]</p> : null}

                {props.details ?
                    <div className="exercises-list">
                        <p>Trening składa się z {training.numberOfSeries} serii.<br/>
                            Seria składa się z następujących ćwiczeń:</p>
                        {training.exerciseOne ? <p>{training.exerciseOne}</p> : null}
                        {training.pauseOne ?
                            <small>Przerwa {training.pauseOne} minuty</small> : null}
                        {training.exerciseTwo ? <p>{training.exerciseTwo}</p> : null}
                        {training.pauseTwo ?
                            <small>Przerwa {training.pauseTwo} minuty</small> : null}
                        {training.exerciseThree ? <p>{training.exerciseThree}</p> : null}
                        {training.pauseThree ?
                            <small>Przerwa {training.pauseThree} minuty</small> : null}
                        {training.exerciseFour ? <p>{training.exerciseFour}</p> : null}
                        {training.pauseFour ?
                            <small>Przerwa {training.pauseFour} minuty</small> : null}
                        {training.exerciseFive ? <p>{training.exerciseFive}</p> : null}
                        {training.pauseFive ?
                            <small>Przerwa {training.pauseFive} minuty</small> : null}
                        {training.exerciseSix ? <p>{training.exerciseSix}</p> : null}
                        {training.pauseSix ?
                            <small>Przerwa {training.pauseSix} minuty</small> : null}
                        {training.exerciseSeven ? <p>{training.exerciseSeven}</p> : null}
                        {training.pauseSeven ?
                            <small>Przerwa {training.pauseSeven} minuty</small> : null}
                        {training.exerciseEight ? <p>{training.exerciseEight}</p> : null}
                        {training.pauseEight ?
                            <small>Przerwa {training.pauseEight} minuty</small> : null}
                        {training.exerciseNine ? <p>{training.exerciseNine}</p> : null}
                        {training.pauseNine ?
                            <small>Przerwa {training.pauseNine} minuty</small> : null}
                        {training.exerciseTen ? <p>{training.exerciseTen}</p> : null}
                        {training.pauseTen ?
                            <small>Przerwa {training.pauseTen} minuty</small> : null}
                        <hr/>
                    </div>
                    : null}
            </li>
        )}
    </ul>
}