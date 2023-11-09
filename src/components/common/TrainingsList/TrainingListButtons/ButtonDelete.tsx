import { TrainingEntity } from "types";
import React from "react";
import {apiUrl} from "../../../../config/api";

interface Props {
    toDelete: TrainingEntity;
    onListChange: () => void;
}

export const ButtonDelete = (props: Props) => {

    const deleteTraining = async () => {

        if (!window.confirm(`Czy na pewno chcesz usunąć z listy następujący trening: "${props.toDelete.name}"?`)) {
            return;
        }

        const res = await fetch(`${apiUrl}/trainings/${props.toDelete.id}`, {
            method: 'DELETE',
        });

        if (res.status === 400 || res.status === 500) {
            const error = await res.json();
            alert(`Wystąpił błąd: ${error.message}`);
            return;
        }
        props.onListChange();

    }

    return <div style={{display: "inline"}}>
        <button onClick={deleteTraining}>Usuń</button>
    </div>

}