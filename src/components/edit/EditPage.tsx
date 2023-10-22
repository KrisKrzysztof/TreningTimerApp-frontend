import React from "react";
import { TrainingEntity } from "types";
import {TrainingsList} from "../common/TrainingsList";

interface Props {
    trainingList: TrainingEntity[];
}

export const EditPage = (props: Props) =>
    <div className="page">

        <div>
            <a className="navi"
               href="/edit/add">Stwórz nowy trening klikając tutaj.</a><br/>
            <h4>Lub edytuj istniejący klikając w odpowiedni przycisk z listy poniżej.</h4>
        </div>
        <hr/>

        <TrainingsList
            trainingList={props.trainingList}
            modify={true}
            details={true}/>

    </div>
