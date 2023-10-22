import {TrainingForm} from "./TrainingForm/TrainingForm";

export const Add = () => {
    return <div className="page">
        <h3>Dodawanie nowego treningu:</h3>
        <TrainingForm modify={false}/>
    </div>
}