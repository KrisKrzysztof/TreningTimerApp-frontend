import { TrainingEntity } from "types";
import {TrainingsList} from "../../common/TrainingsList/TrainingsList";

interface Props {
    trainingList: TrainingEntity[];
    onListChange: () => void;
}

export const MainPage = (props: Props) =>
    <div className="page">
        <h2> WITAJ NA STRONIE GŁÓWNEJ APLIKACJI</h2>
        <p>Znajdziesz tu krótki opis aplikacji oraz podgląd dostępnych treningów.</p>
        <h1 style={{marginBottom: 0}}>Training Timer APP</h1>
        <p>To aplikacja służąca do odmierzania przerw o różnych długościach pomiędzy poszczególnymi ćwiczeniami w treningu. <br/>Dodając trening można ustawić różnej długości przerwy dla różnych ćwiczeń.</p>
        <p>Możesz też dodać swój własny trening wybierając odpowiednią sekcję z
            menu.</p>
        <hr/>
        <h2>WYBIERZ Z MENU U GÓRY CO CHCESZ ZROBIĆ</h2>
        <hr/>
        <p>Oto aktualna lista dostępnych treningów:</p>
        <TrainingsList
            nameAndDescription={true}
            onListChange={props.onListChange}
            trainingList={props.trainingList}
            modify={false}
            details={false}/>
    </div>