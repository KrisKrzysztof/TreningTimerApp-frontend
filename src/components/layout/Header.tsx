import {useNavigate} from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();
    const goToMainPage = () => {
        navigate('/');
    };
    const goToStartTraining = () => {
        navigate('/training');
    };
    const goToEdit = () => {
        navigate('/edit');
    };

    return <header className="App-header">
        <h1 className="navi" onClick={goToMainPage}>Trening Timer APP</h1>
        <h2 className="navi" onClick={goToStartTraining}>Rozpocznij trening</h2>
        <h2 className="navi" onClick={goToEdit}>Sekcja edycji treningów</h2>
        <hr/>
    </header>
}