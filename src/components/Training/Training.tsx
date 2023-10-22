import {TrainingEntity} from "types";
import {TrainingsList} from "../common/TrainingsList";
import {ChangeEvent, useState} from "react";
import {TrainingTimer} from "./TrainingTimer";

interface Props {
    trainingList: TrainingEntity[];
    onListChange: () => void;
}

export const Training = (props: Props) => {
    const [selectedTraining, setSelectedTraining] = useState<TrainingEntity[]>([]);

    const selectTraining = (event: ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault();
        setSelectedTraining(() => props.trainingList ?
            props.trainingList.filter(el => el.name === event.target.value) : []);
    }

    return <div className="page">

        <form className={selectedTraining[0] ? "hidden" : "show"}>
            <label>
                <select value={selectedTraining[0]?.name}
                        onChange={selectTraining}>
                    <option value="">Wybierz trening</option>
                    {props.trainingList?.map((training) =>
                        <option value={training.name} key={training.id}>
                            {training.name}</option>)}
                </select>
            </label>
        </form>

        {selectedTraining[0] ?
            <TrainingTimer training={selectedTraining[0]}/> :
            <p><b>Z rozwijanej listy wybierz trening  który chcesz rozpocząć.</b><br/><small>Poniżej znajdziesz szczegółowy opis każdego z dostępnych treningów.<br/>Po wybraniu treningu pojawi się okienko dialogowe z przyciskiem start, dalej postępuj zgodnie z instrukcjami, które tam będą się pojawiać.</small></p>
            }

        <hr/>
        <div className={selectedTraining[0] ? "hidden" : "show"}>
            <h4>Oto Lista dostępnych treningów wraz ze szczegółami.</h4>
            <TrainingsList
                onListChange={props.onListChange}
                trainingList={props.trainingList}
            modify={false}
            details={true}/>
        </div>

    </div>
}