import s from './header.css'; 
import cn from "classnames";
import Slider from '../slider/slider.jsx';
import Logo from '../logo/logo.jsx';
import Button from '../buttons/buttons.jsx';
import Search from '../search/search.jsx';

function Header({children, changeInput}) {
    return (
      <header className={cn(s.header)}>
        <div className="container">
            <Logo className="logo logo_place_header" href='/' />
            <h1 className='title'>CeramicaShop</h1>
            <Search changeInput={changeInput}/>
            <div className={s.wrapper}>{children}</div>
            
            <Button/>
            <Slider />
          </div>
    </header>
    )
}

export default Header;


