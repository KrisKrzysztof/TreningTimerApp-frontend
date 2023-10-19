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
               href="/edit/add">Stwórz nowy trening</a><br/>
            <a className="navi"
               href="/edit/modify">Edytuj istniejący trening</a><br/>
        </div>

        <TrainingsList
            trainingList={props.trainingList}
            modify={true}
            details={true}/>



    </div>
