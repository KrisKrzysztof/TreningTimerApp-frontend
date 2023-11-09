import { TrainingEntity } from "types";
import React from "react";

interface Props {
    toModify: TrainingEntity;
}

export const ButtonModify = (props: Props) => {
    return <div style={{display: "inline"}}>
        <input className='button' type="button" onClick={() => window.location.href=`/edit/${props.toModify.id}`} value="Edytuj"/>
    </div>
}