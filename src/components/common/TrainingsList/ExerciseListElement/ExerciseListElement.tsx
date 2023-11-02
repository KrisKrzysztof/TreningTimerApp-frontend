import {zerofill} from "../../../../utils/zerofill";
import React from "react";

interface Props {
    exercise: string;
    pause: number;
}

export const ExerciseListElement = (props: Props) => {
    const {exercise, pause} = props;
  return <div>
      {exercise ? <p>{exercise}</p> : null}
      {pause ?
          <small>Przerwa {Math.floor(pause / 60)}:{zerofill(pause)}</small> : null}
  </div>
}