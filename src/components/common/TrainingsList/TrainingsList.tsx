import React from "react";
import './TrainingsList.css';
import { TrainingEntity } from "types";
import {ButtonDelete} from "./TrainingListButtons/ButtonDelete";
import {ButtonModify} from "./TrainingListButtons/ButtonModify";
import {Spinner} from "../Spinner/Spinner";

interface Props {
    nameAndDescription: boolean;
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

                {props.nameAndDescription ? <div>
                    <h3>{training.name}</h3>
                    <p>{training.description ||
                        'Brak opisu.'}</p>
                </div> :null}

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
                            <small>Przerwa {training.pauseOne} minut(y)</small> : null}
                        {training.exerciseTwo ? <p>{training.exerciseTwo}</p> : null}
                        {training.pauseTwo ?
                            <small>Przerwa {training.pauseTwo} minut(y)</small> : null}
                        {training.exerciseThree ? <p>{training.exerciseThree}</p> : null}
                        {training.pauseThree ?
                            <small>Przerwa {training.pauseThree} minut(y)</small> : null}
                        {training.exerciseFour ? <p>{training.exerciseFour}</p> : null}
                        {training.pauseFour ?
                            <small>Przerwa {training.pauseFour} minut(y)</small> : null}
                        {training.exerciseFive ? <p>{training.exerciseFive}</p> : null}
                        {training.pauseFive ?
                            <small>Przerwa {training.pauseFive} minut(y)</small> : null}
                        {training.exerciseSix ? <p>{training.exerciseSix}</p> : null}
                        {training.pauseSix ?
                            <small>Przerwa {training.pauseSix} minut(y)</small> : null}
                        {training.exerciseSeven ? <p>{training.exerciseSeven}</p> : null}
                        {training.pauseSeven ?
                            <small>Przerwa {training.pauseSeven} minut(y)</small> : null}
                        {training.exerciseEight ? <p>{training.exerciseEight}</p> : null}
                        {training.pauseEight ?
                            <small>Przerwa {training.pauseEight} minut(y)</small> : null}
                        {training.exerciseNine ? <p>{training.exerciseNine}</p> : null}
                        {training.pauseNine ?
                            <small>Przerwa {training.pauseNine} minut(y)</small> : null}
                        {training.exerciseTen ? <p>{training.exerciseTen}</p> : null}
                        {training.pauseTen ?
                            <small>Przerwa {training.pauseTen} minut(y)</small> : null}
                        <hr/>
                    </div>
                    : null}
            </li>
        )}
    </ul>
}