import { TrainingEntity } from "types";
import {FormEvent, useEffect, useState} from "react";
import {apiUrl} from "../../../config/api";
import {useParams} from "react-router-dom";
import {OptionalExercises, optionalExercises} from "../../../utils/optionalExercises";
import {Spinner} from "../../common/Spinner/Spinner";
import {ExtraExerciseForm} from "./ExtraExerciseForm";
import {BasicRequiredForm} from "./BasicRequiredForm";

interface Props {
    modify: boolean;
}

export const TrainingForm = (props: Props) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [training, setTraining] = useState<TrainingEntity>({
        id: '',
        name: '',
        description: null,
        numberOfSeries: 1,
        exerciseOne: '',
        pauseOne: 1,
    });
    const [showExtraTrainings, setShowExtraTrainings] = useState<boolean>(false);

    let {id} = useParams();

    useEffect(() => {
        try {
            setLoading(true);
            const getTraining = async (): Promise<void> => {
                const res = await fetch(`${apiUrl}/trainings/${id}`);
                const data = await res.json();
                setTraining(data);
            };
            props.modify ? getTraining() : setShowExtraTrainings(true);
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    }, []);

    const extraTrainings: OptionalExercises[] = optionalExercises(training);
    const checkEmptyRecords: boolean = extraTrainings.map(element => element.exercise).some(element => element === undefined);

    const updateForm = (key: string, value: any): void => (
        setTraining({
            ...training,
            [key]: value,
        })
    )
    const show = () => {
        setShowExtraTrainings(true);
    };

    const updateTraining = async (event: FormEvent): Promise<void> => {
        event.preventDefault();
        console.log('do zapisu: ' + JSON.stringify(training));
        try {
            setLoading(true);
            const res = await fetch(`${apiUrl}/trainings/${training.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(training),
            });
            const data = await res.json();
            if (res.status === 400 || res.status === 500) {
                alert(`Wystąpił błąd: ${data.message}`);
                return;
            }
            alert(`Zaktualizowano trening o nazwie ${data.name}`);
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    };
    const saveTraining = async (event: FormEvent): Promise<void> => {
        event.preventDefault();
        try {
            setLoading(true);
            const res = await fetch(`${apiUrl}/trainings`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(training),
            });
            const data = await res.json();
            if (res.status === 400 || res.status === 500) {
                alert(`Wystąpił błąd: ${data.message}`);
                return;
            }
            alert(`Dodano trening o nazwie ${data.name}`);
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
            window.location.reload();
        }
    };

    if (loading) {
        return <Spinner/>;
    }

    return <form onSubmit={props.modify ? updateTraining : saveTraining}>
        <BasicRequiredForm training={training} updateForm={updateForm}/>
          {
              extraTrainings.map((element) =>
                      (element.exercise || element.pause) ?
                          <ExtraExerciseForm
                              key={element.labelName}
                              labelName={element.labelName}
                              exercise={element.exercise}
                              pause={element.pause}
                              keyValueSuffix={element.keyValueSuffix}
                              updateForm={updateForm}
                          />
                          : <div key={element.labelName} className={showExtraTrainings ? 'block' : 'hidden'}>
                              <ExtraExerciseForm
                                  key={element.labelName}
                                  labelName={element.labelName}
                                  exercise={element.exercise}
                                  pause={element.pause}
                                  keyValueSuffix={element.keyValueSuffix}
                                  updateForm={updateForm}
                              />
                          </div>
              )
          }
          <div>
          {props.modify ?
              <button type="button" onClick={show} className={showExtraTrainings || !checkEmptyRecords ? 'hidden' : 'block'}> DODAJ WIĘCEJ ĆWICZEŃ </button> : null}
              <br/>
          <button type='submit'> ZAPISZ </button>
          </div>
      </form>
}