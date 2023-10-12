import {TrainingEntity} from "types";
import {TrainingsList} from "../edit/TrainingsList";
import {ChangeEvent, useState} from "react";

interface Props {
    trainingList: TrainingEntity[];
}

export const Training = (props: Props) => {
    const [selectedTraining, setSelectedTraining] = useState<TrainingEntity[]>([]);

    const selectTraining = (event: ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault();
        setSelectedTraining(() => props.trainingList ? props.trainingList.filter(el => el.name === event.target.value) : []);
    }

    // const chosen = (event: ChangeEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    // }

    function handleClick() {
        console.log('wybrany trening', selectedTraining);
    }

    return <div className="page">
        <p><b>Wybierz trening który chcesz rozpocząć</b><br/><small>Na samym dole tej strony znajdziesz szczegółowy opis każdego z dostępnych treningów.<br/>Po wybraniu treningu pojawi się okienko dialogowe z przyciskiem start, dalej postępuj zgodnie z instrukcjami, które tam będą się pojawiać.</small></p>
        <form>
            <label>
                <select value={selectedTraining[0]?.name}
                        onChange={selectTraining}>
                    <option value="">Wybierz trening</option>
                    {props.trainingList?.map((training) =>
                        <option value={training.name} key={training.id}>
                            {training.name}</option>)}
                </select>
            </label>
            {/*<button type="submit">WYBIERZ</button>*/}
        </form>
        <button onClick={handleClick}>sprawdź w konsoli</button>

        {selectedTraining[0] ?
            <p>tutaj będzie odliczanie itd</p> :
            <div>
                <p>tutaj będzie profesjonalny interfejs</p>
                {/*{props.trainingList ? <p>a</p> : 'b'}                */}
            </div>}
        <hr/>
        <h4>Oto Lista dostępnych treningów wraz ze szczegółami.</h4>
        <TrainingsList
            trainingList={props.trainingList}
            details={true}/>
    </div>
}