import { TrainingEntity } from "types";

interface Props {
    details: boolean;
    trainingList: TrainingEntity[];
}

export const TrainingsList = (props: Props) =>
    <ul>
      {props.trainingList.map(training =>
          <li key={training.id}>
              <p><strong>{training.name}</strong><br/>{training.description || 'Brak opisu.'}</p>
              {props.details ?
                  <p>
                      Trening składa się z {training.numberOfSeries} serii.<br/>
                      Jedna seria składa się z następujących ćwiczeń:<br/>
                      <li>{training.exerciseOne}</li>
                      <li>{training.exerciseOne}</li>
                      <li>{training.exerciseTwo}</li>
                      <li>{training.exerciseThree}</li>
                      <li>{training.exerciseFour}</li>
                      <li>{training.exerciseFive}</li>
                      <li>{training.exerciseSix}</li>
                      <li>{training.exerciseSeven}</li>
                      <li>{training.exerciseEight}</li>
                      <li>{training.exerciseNine}</li>
                      <li>{training.exerciseTen}</li>
                  </p>
              : null}
          </li>
      )}
  </ul>