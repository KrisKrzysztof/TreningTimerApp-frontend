import {useNavigate} from "react-router-dom";

export const EditPage = () => {
    const navigate = useNavigate();
    const goToAdd = () => {
        navigate('/edit/add');
    };
    const goToEditTraining = () => {
        navigate('/edit/modify');
    };
    const goToAddExercise = () => {
        navigate('/edit/exercise/add');
    };
    const goToModifyExercise = () => {
        navigate('/edit/exercise/modify');
    };

    return <div>
        <h2 className="edit-navi" onClick={goToAdd}>Stwórz nowy trening</h2>
        <h2 className="edit-navi" onClick={goToEditTraining}>Edytuj istniejący trening</h2>
        <h2 className="edit-navi" onClick={goToAddExercise}>Dodaj nowe ćwiczenie</h2>
        <h2 className="edit-navi" onClick={goToModifyExercise}>Edytuj istniejące ćwiczenie</h2>
    </div>
}