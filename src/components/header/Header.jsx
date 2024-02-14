
import "../header/header.css";

function Header () {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">Sonali.</div>
                    <nav className="header__nav">
                    
                        <ul>
                            <li><a href="#!">На главную</a></li>
                            <li><a href="#!">Работы</a></li>
                            <li><a href="#!">Отзывы</a></li>
                            <li><a href="#!">Блог</a></li>
                            <li><a href="#!" className="header__nav-btn">Контакты</a></li>
                        </ul>

                    </nav>
                </div>
            </div>
        </header>
    ) 
}

export default Header;