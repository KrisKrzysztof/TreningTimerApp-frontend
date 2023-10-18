import { TrainingEntity } from "types";
import {TrainingsList} from "../TrainingsList";

interface Props {
    trainingList: TrainingEntity[];
}

export const MainPage = (props: Props) =>
    <div className="page">
        <h1>To jest strona główna</h1>
        <p>Znajdziesz tu podgląd dostępnych treningów.</p>
        <p><strong>Timer Training APP</strong><br/>To aplikacja służąca do
            zaawansowanego odmierzania przerw pomiędzy poszczególnymi ćwiczeniami w treningu. <br/>Dodając trening można ustawić różnej długości przerwy dla różnych ćwiczeń.</p>
        <p>Możesz też dodać swój własny trening wybierając odpowiednią sekcję z
            menu.</p>
        <h2>WYBIERZ Z MENU U GÓRY CO CHCESZ ZROBIĆ</h2>
        <p>Oto aktualna lista treningów z krótkim opisem (jeśli dodano):</p>
        <TrainingsList
            trainingList={props.trainingList}
            details={false}/>
    </div>