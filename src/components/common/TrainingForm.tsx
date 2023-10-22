import { TrainingEntity } from "types";
import {FormEvent, useEffect, useState} from "react";
import {apiUrl} from "../../config/api";
import {useParams} from "react-router-dom";
import {OptionalTrainings, optionalTrainings} from "../../utils/optionalTrainings";
import {Spinner} from "./Spinner/Spinner";

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
            (async () => {
                const res = await fetch(`${apiUrl}/trainings/${id}`);
                const data = await res.json();
                setTraining(data);
            })();
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    }, []);

    const extraTrainings: OptionalTrainings[] = optionalTrainings(training);
    const checkEmptyRecords = extraTrainings.map(element => element.exercise).some(element => element === undefined);

    const updateForm = (key: string, value: any) => (
        setTraining({
            ...training,
            [key]: value,
        })
    )
    const show = () => {
        setShowExtraTrainings(true);
    };

    const updateTraining = async (event: FormEvent) => {
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
            console.log('finally');
        }
    };
    const saveTraining = async (event: FormEvent) => {
        event.preventDefault();
        console.log('zapisano');
    };

    if (loading) {
        return <Spinner/>;
    }

    return <div>
      <form
          className='training-form'
          onSubmit={props.modify ? updateTraining : saveTraining}
      >
          <label>
              <p className="label-p-basic">Nazwa: </p>
              <input
                  required
                  type="text"
                  value={training.name}
                  onChange={event => updateForm('name', event.target.value)}/>
          </label>
          <label>
              <p className="label-p-basic">Opis: </p>
              <textarea
                  rows={3}
                  cols={60}
                  value={training.description || ''}
                  onChange={event => updateForm('description', event.target.value)}/>
          </label>
          <label>
              <p className='label-p-num'>Liczba serii: </p>
              <input
                  required
                  className='label-inp-num'
                  type="number"
                  value={training.numberOfSeries}
                  onChange={event => updateForm('numberOfSeries', Number(event.target.value))}/>
          </label>
          <h4>Lista ćwiczeń w każdej serii</h4>
          <div>
          <label>
              <p>Ćwiczenie pierwsze: </p>
              <input
                  required
                  type="text"
                  value={training.exerciseOne}
                  onChange={event => updateForm('exerciseOne', event.target.value)}/>
          </label><br/>
          <label>
              <p className='label-p-num'>Pauza: <> </>
                  <input
                      required
                      className='label-inp-num'
                      type="number"
                      value={training.pauseOne}
                      onChange={event => updateForm('pauseOne', Number(event.target.value))}/> minuty</p>
          </label><hr/>
          </div>
          {props.modify ?
              extraTrainings.map((element) =>
                      (element.exercise || element.pause) ?
                          <div key={element.labelName}>
                              <label>
                                  <p>{element.labelName}: </p>
                                  <input
                                      type="text"
                                      value={element.exercise}
                                      onChange={event => updateForm(`exercise${element.keyValueSuffix}`, event.target.value)}/>
                              </label><br/>
                              <label>
                                  <p className='label-p-num'>Pauza: <> </>
                                      <input
                                          className='label-inp-num'
                                          type="number"
                                          value={element.pause}
                                          onChange={event => updateForm(`pause${element.keyValueSuffix}`, Number(event.target.value))}/> minuty</p>
                              </label><hr/>
                          </div>
                          : <div key={element.keyValueSuffix} className={showExtraTrainings ? 'block' : 'hidden'}>
                                  <label>
                                      <p>{element.labelName}: </p>
                                      <input
                                          type="text"
                                          value={element.exercise}
                                          onChange={event => updateForm(`exercise${element.keyValueSuffix}`, event.target.value)}/>
                                  </label><br/>
                                  <label>
                                      <p className='label-p-num'>Pauza: <> </>
                                          <input
                                              className='label-inp-num'
                                              type="number"
                                              value={element.pause}
                                              onChange={event => updateForm(`pause${element.keyValueSuffix}`, Number(event.target.value))}/> minuty</p>
                                  </label><hr/>
                          </div>
                  ) : null
          }
          {props.modify ?
              <button type="button" onClick={show} className={showExtraTrainings || !checkEmptyRecords ? 'hidden' : 'block'}> DODAJ WIĘCEJ ĆWICZEŃ </button> : null}
          <button type='submit'> ZAPISZ </button>
      </form>


    </div>
}