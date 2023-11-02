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
                            <small>Przerwa {Math.floor(training.pauseOne / 60)}:{(training.pauseOne % 60)}</small> : null}
                        {training.exerciseTwo ? <p>{training.exerciseTwo}</p> : null}
                        {training.pauseTwo ?
                            <small>Przerwa {Math.floor(training.pauseTwo / 60)}:{(training.pauseTwo % 60)}</small> : null}
                        {training.exerciseThree ? <p>{training.exerciseThree}</p> : null}
                        {training.pauseThree ?
                            <small>Przerwa {Math.floor(training.pauseThree / 60)}:{(training.pauseThree % 60)}</small> : null}
                        {training.exerciseFour ? <p>{training.exerciseFour}</p> : null}
                        {training.pauseFour ?
                            <small>Przerwa {Math.floor(training.pauseFour / 60)}:{(training.pauseFour % 60)}</small> : null}
                        {training.exerciseFive ? <p>{training.exerciseFive}</p> : null}
                        {training.pauseFive ?
                            <small>Przerwa {Math.floor(training.pauseFive / 60)}:{(training.pauseFive % 60)}</small> : null}
                        {training.exerciseSix ? <p>{training.exerciseSix}</p> : null}
                        {training.pauseSix ?
                            <small>Przerwa {Math.floor(training.pauseSix / 60)}:{(training.pauseSix % 60)}</small> : null}
                        {training.exerciseSeven ? <p>{training.exerciseSeven}</p> : null}
                        {training.pauseSeven ?
                            <small>Przerwa {Math.floor(training.pauseSeven / 60)}:{(training.pauseSeven % 60)}</small> : null}
                        {training.exerciseEight ? <p>{training.exerciseEight}</p> : null}
                        {training.pauseEight ?
                            <small>Przerwa {Math.floor(training.pauseEight / 60)}:{(training.pauseEight % 60)}</small> : null}
                        {training.exerciseNine ? <p>{training.exerciseNine}</p> : null}
                        {training.pauseNine ?
                            <small>Przerwa {Math.floor(training.pauseNine / 60)}:{(training.pauseNine % 60)}</small> : null}
                        {training.exerciseTen ? <p>{training.exerciseTen}</p> : null}
                        {training.pauseTen ?
                            <small>Przerwa {Math.floor(training.pauseTen / 60)}:{(training.pauseTen % 60)}</small> : null}
                        <hr/>
                    </div>
                    : null}
            </li>
        )}
    </ul>
}