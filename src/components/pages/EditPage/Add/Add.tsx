import {TrainingForm} from "../TrainingForm/TrainingForm";

export const Add = () => {
    return <div className="page">
        <h2>Dodawanie nowego treningu:</h2>
        <TrainingForm modify={false}/>
    </div>
}