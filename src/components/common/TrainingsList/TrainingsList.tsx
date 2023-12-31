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
    const {
        nameAndDescription,
        details,
        modify,
        trainingList,
        onListChange,
    } = props;

    if (trainingList[0] === undefined) {
        return <Spinner/>
    }

    const exercisesKeysArray = (obj: TrainingEntity) => {
        const keyArray = Object.keys(obj).filter(element => element.startsWith('exercise'));
        return keyArray.map((item) => {
            const idKeys = item.split('exercise');
            return idKeys[1];
        });
    }

    return <ul className="training-list">
        {trainingList.map(training =>
            <li key={training.id}>

                {nameAndDescription ? <div>
                    <h3>{training.name}</h3>
                    <p className='training-list-description'>{training.description ||
                        'Brak opisu.'}</p>
                </div> :null}

                {modify && !training.id.startsWith('protected') ?
                    <ButtonModify toModify={training}/> : null}

                {modify && !training.id.startsWith('protected') ?
                    <ButtonDelete toDelete={training}
                                  onListChange={onListChange}/> : null}

                {modify && training.id.startsWith('protected') ? <small className="box">[info] Ten trening jest chroniony, nie można go usunąć ani modyfikować.</small> : null}

                {details ?
                    <div className="exercises-list">
                        <p className="exercises-list-p">
                            Trening składa się z {training.numberOfSeries} serii.<br/>
                            Seria składa się z następujących ćwiczeń:
                        </p>

                        <div> {exercisesKeysArray(training).map(key => {
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
                            })}
                        </div>
                        <hr className='hr-trainingList'/>
                    </div>
                    : null}
            </li>
        )}
    </ul>
}