import "./navbar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 


        <div className="main-container">
            <div>
                <nav className="navbar">
                    <div className="main-logo">
                        <div className="logo">
                            <h1><a href="/">Гарант Бот</a></h1>
                        </div>
                    </div>

                    <div className="main-navbar">
                        <div className="list-navbar">
                            <ul>
                                <li><Link to="/team">Учасники проєкту</Link></li>
                                <li><Link to="/technologies">Технології</Link></li>
                                <li><Link to="/competitors">Для кого</Link></li>
                                <li><Link to="/advantages">Наші переваги над конкурентами</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
     );
}
 
export default NavBar;