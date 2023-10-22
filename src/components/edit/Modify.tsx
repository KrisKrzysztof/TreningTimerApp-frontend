import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {apiUrl} from "../../config/api";
import {TrainingForm} from "./TrainingForm";
import {Spinner} from "../common/Spinner/Spinner";

export const Modify = () => {
    const [trainingName, setTrainingName] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    let {id} = useParams();

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`${apiUrl}/trainings/${id}`);
                const data = await res.json();
                if (res.status === 400 || res.status === 500) {
                    setErrorMessage(data.message);
                    return;
                }
                setTrainingName(data.name);
            } catch (error) {
                alert(error);
            }
        })();
    }, []);

    if (!trainingName && errorMessage) {
        return <h3>{errorMessage}</h3>;
    } else if (!trainingName && !errorMessage) {
        return <Spinner/>;
    }

    return <div className='page'>
        <h3>Edycja treningu: "{trainingName}"</h3>
        <TrainingForm
            modify={true}/>
    </div>
}