import { TrainingEntity } from "types";
import {TrainingsList} from "../common/TrainingsList/TrainingsList";

interface Props {
    trainingList: TrainingEntity[];
    onListChange: () => void;
}

export const MainPage = (props: Props) =>
    <div className="page">
        <h1>To jest strona główna</h1>
        <p>Znajdziesz tu krótki opis aplikacji oraz podgląd dostępnych treningów.</p>
        <h2>Timer Training APP</h2>
        <p>To aplikacja służąca do zaawansowanego odmierzania przerw pomiędzy poszczególnymi ćwiczeniami w treningu. <br/>Dodając trening można ustawić różnej długości przerwy dla różnych ćwiczeń.</p>
        <p>Możesz też dodać swój własny trening wybierając odpowiednią sekcję z
            menu.</p>
        <h2>WYBIERZ Z MENU U GÓRY CO CHCESZ ZROBIĆ</h2>
        <p>Oto aktualna lista treningów z krótkim opisem (jeśli dodano):</p>
        <TrainingsList
            onListChange={props.onListChange}
            trainingList={props.trainingList}
            modify={false}
            details={false}/>
    </div>