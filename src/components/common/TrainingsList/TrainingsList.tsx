import React from "react";
import './TrainingsList.css';
import { TrainingEntity } from "types";
import {ButtonDelete} from "./TrainingListButtons/ButtonDelete";
import {ButtonModify} from "./TrainingListButtons/ButtonModify";
import {Spinner} from "../Spinner/Spinner";
import {ExerciseListElement} from "./ExerciseListElement/ExerciseListElement";

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

    const keysArray = (element: TrainingEntity) => {
        const keyArray = Object.keys(element).filter(element => element.startsWith('exercise'));
        return keyArray.map((item) => {
            const idKeys = item.split('exercise');
            return idKeys[1];
        });
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

                        <div> {keysArray(training).map(key => {
                            const exerciseKey = `exercise${key}` as keyof TrainingEntity;
                            const pauseKey = `pause${key}` as keyof TrainingEntity;
                            const exerciseValue = training[exerciseKey] as string;
                            const pauseValue = training[pauseKey] as number;

                            if (exerciseValue && exerciseValue) {
                                return <ExerciseListElement
                                    key={key}
                                    exercise={exerciseValue}
                                    pause={pauseValue}/>
                            }
                            return null;
                            }
                        )}
                        </div>

                        <hr/>
                    </div>
                    : null}
            </li>
        )}
    </ul>
}