import {TrainingForm} from "./TrainingForm";

export const Add = () => {
    return <div>
        <h3>Dodawanie nowego treningu:</h3>
        <TrainingForm modify={false}/>
    </div>
}