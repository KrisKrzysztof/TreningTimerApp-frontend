import {zerofill} from "../../../../utils/zerofill";
import React from "react";

interface Props {
    exercise: string;
    pause: number;
}

export const ExerciseListElement = (props: Props) => {
    const {exercise, pause} = props;
  return <div>
      {exercise ? <p className='exercises-name'>{exercise}</p> : null}
      {pause ?
          <small className='exercises-name'>Przerwa <span className='exercises-name-time'>{Math.floor(pause / 60)}:{zerofill(pause)}</span></small> : null}
  </div>
}