import { TrainingEntity } from "types";
import {TrainingsList} from "../edit/TrainingsList";

interface Props {
    trainingList: TrainingEntity[] | null;
}
export const Training = (props: Props) => {

    return <div>
        <h3>Oto Lista dostępnych treningów wraz ze szczegółami.</h3>
        <TrainingsList
            trainingList={props.trainingList}
            details={true}/>
    </div>
}