import './Header.css';
import logo from '../../../assets/logo.gif';

export const Header = () => (
    <header className="App-header">
        <a className="header-element title" href="/"
        ><img className='logo-img' src={logo} alt='Training Timer APP'/></a>
        <a className="header-element" href="/training"
        >ROZPOCZNIJ TRENING</a>
        <a className="header-element" href="/edit"
        >SEKCJA EDYCJI TRENINGÓW</a>
    </header>
)