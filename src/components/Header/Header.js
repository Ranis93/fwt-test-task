import companyLogo from '../../img/icons/logo.svg';
import lb from '../../img/icons/light.svg';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                    <img src={companyLogo} alt="fwt"></img>
            </div>
            <div className="header__light">
                <img src={lb} alt="fwt"></img>
            </div>
        </div>
    )
}

export default Header;