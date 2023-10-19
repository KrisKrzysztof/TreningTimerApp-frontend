import { TrainingEntity } from "types";
import React from "react";

interface Props {
    toDelete: TrainingEntity;
}

export const ButtonDelete = (props: Props) => {

    const deleteTraining = async () => {

        if (!window.confirm(`Czy jesteś pewny, że chcesz usunąć z listy następujący trening: "${props.toDelete.name}"?`)) {
            return;
        }

        const res = await fetch(`http://localhost:3001/api/trainings/${props.toDelete.id}`, {
            method: 'DELETE',
        });

        if (res.status === 400 || res.status === 500) {
            const error = await res.json();
            alert(`Wystąpił błąd: ${error.message}`);
            return;
        }

    }

    return <div style={{display: "inline"}}>
        <button onClick={deleteTraining}>Usuń</button>
    </div>

}