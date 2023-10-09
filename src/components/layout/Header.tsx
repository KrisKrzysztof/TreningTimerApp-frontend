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
        <h1 className="navi header-element" onClick={goToMainPage}>Trening Timer APP</h1>
        <h2 className="navi header-element" onClick={goToStartTraining}>Rozpocznij trening</h2>
        <h2 className="navi header-element" onClick={goToEdit}>Sekcja edycji treningów</h2>
    </header>
}