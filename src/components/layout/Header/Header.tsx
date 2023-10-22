import './Header.css';

export const Header = () => (
    <header className="App-header">
        <a
            className="header-element title"
            href="/"
        >Training Timer APP</a>
        <a
            className="header-element"
            href="/training"
        >ROZPOCZNIJ TRENING</a>
        <a
            className="header-element"
            href="/edit"
        >SEKCJA EDYCJI TRENINGÓW</a>
    </header>
)