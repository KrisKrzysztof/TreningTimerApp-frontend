import './EditPage.css';
import React from "react";
import { TrainingEntity } from "types";
import {TrainingsList} from "../../common/TrainingsList/TrainingsList";

interface Props {
    trainingList: TrainingEntity[];
    onListChange: () => void;
}

export const EditPage = (props: Props) =>
    <div className="page">
        <div>
            <a className="add-link"
               href="/edit/add"> {'> STWÓRZ NOWY TRENING KLIKAJĄC TUTAJ <'} </a><br/>
            <h4>LUB</h4>
            <h3>EDYTUJ ISTNIEJĄCY TRENING KLIKAJĄC W ODPOWIEDNI PRZYCISK NA LIŚCIE DOSTĘPNYCH TRENINGÓW</h3>
        </div>
        <hr/><hr/>
        <TrainingsList
            nameAndDescription={true}
            trainingList={props.trainingList}
            onListChange={props.onListChange}
            modify={true}
            details={true}/>
    </div>
