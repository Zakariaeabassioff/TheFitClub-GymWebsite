import React, {useState} from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import {Link} from 'react-scroll';

const Header = () => {
    const mobile = (window.innerWidth <= 768) ? true : false;
    const [menuOpened, setMenuOpened] = useState(false);

return (
    <div className='header'>
        <img src={Logo} alt="" className='logo'/>

        {(menuOpened === false && mobile === true) ? 
        (<div className='bars'
        onClick={() => setMenuOpened(true)}
        ><img src={Bars} alt="" /></div>) 
        : 
        (<ul className='header-menu'>
            <li><Link 
            onClick={() => setMenuOpened(false)}
            to='home' 
            spay={true} 
            smooth={true}>
                Home</Link>
            </li>

            <li><Link 
            onClick={() => setMenuOpened(false)}
            to='programs' 
            spay={true} 
            smooth={true}>
                Programs</Link></li>

            <li><Link 
            onClick={() => setMenuOpened(false)}
            to='reasons' 
            spay={true} 
            smooth={true}>
                Why us</Link></li>

            <li><Link 
            onClick={() => setMenuOpened(false)}
            to='plans' 
            spay={true} 
            smooth={true}>
                Plans</Link></li>

            <li><Link 
            onClick={() => setMenuOpened(false)}
            to='testimonials' 
            spay={true} 
            smooth={true}>
                Testimonials</Link></li>
        </ul>)}

        
    </div>
)
}

export default Header