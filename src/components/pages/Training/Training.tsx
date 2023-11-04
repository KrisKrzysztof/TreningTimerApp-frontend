import {TrainingEntity} from "types";
import {TrainingsList} from "../../common/TrainingsList/TrainingsList";
import {ChangeEvent, useState} from "react";
import {TrainingTimer} from "./TrainingTimer/TrainingTimer";

interface Props {
    trainingList: TrainingEntity[];
    onListChange: () => void;
}

export const Training = (props: Props) => {
    const {trainingList, onListChange} = props;
    const [selectedTraining, setSelectedTraining] = useState<TrainingEntity[]>([]);

    const selectTraining = (event: ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault();
        setSelectedTraining(() => trainingList ?
            trainingList.filter(el => el.id === event.target.value) : []);
    }

    return <div className="page">

        <label className={selectedTraining[0] ? "hidden" : "show"}>
            <select
                style={{blockSize: 30}}
                value={selectedTraining[0]?.id}
                onChange={selectTraining}>
                <option value="">{'---==>> Wybierz trening <<==---'}</option>
                {trainingList?.map((training) =>
                    <option
                        value={training.id}
                        key={training.id}
                    >
                        {training.name}</option>)}
            </select>
        </label>

        {selectedTraining[0] ?
            <TrainingTimer training={selectedTraining[0]}/>
            : <div>
                <h3>Z ROZWIJANEJ LISTY WYBIERZ TRENING KTÓRY CHCESZ ROZPOCZĄĆ.</h3>
                <p>Poniżej znajdziesz szczegółowy opis każdego z dostępnych treningów.<br/>Po wybraniu treningu pojawi się okienko dialogowe z przyciskiem "START", <br/>dalej postępuj zgodnie z instrukcjami, które tam się pojawią.</p>
                <hr/>
            </div>
        }



        <div className={selectedTraining[0] ? "hidden" : "show"}>
            <hr/>
            <h4>Oto Lista dostępnych treningów wraz ze szczegółami:</h4>
            <hr className='hr-trainingList'/>
            <TrainingsList
                nameAndDescription={true}
                onListChange={onListChange}
                trainingList={trainingList}
                modify={false}
                details={true}
            />
        </div>

    </div>
}