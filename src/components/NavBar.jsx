import {useNavigate, useLocation } from 'react-router-dom';
import { ReactComponent as OfferIcon} from '../assets/svg/localOfferIcon.svg'; 
import { ReactComponent as PersonOutlineIcon} from '../assets/svg/personOutlineIcon.svg'; 
import { ReactComponent as ExploreIcon} from '../assets/svg/exploreIcon.svg'; 
function NavBar() {
    const navigate = useNavigate()
    const location = useLocation()

    const pathMatch = route=>{
        if(route === location.pathname) return true;
    }
  return (
    <footer className='navbar'>
        <nav className='navbarNav'>
            <ul className='navbarListItems'>
                <li lassName='navbarListItem' onClick={()=>navigate('/')}>
                    <ExploreIcon fill={pathMatch('/') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px'/>
                    <p>Explore</p>
                </li>
                <li lassName='navbarListItem' fill={pathMatch('/offers') ? '#2c2c2c' : '#8f8f8f'} onClick={()=>navigate('/offers')}>
                    <OfferIcon fill='#2c2c2c' width='36px' height='36px'/>
                    <p>Offers</p>
                </li>
                <li lassName='navbarListItem' fill={pathMatch('/profile') ? '#2c2c2c' : '#8f8f8f'} onClick={()=>navigate('/profile')}>
                    <PersonOutlineIcon fill='#2c2c2c' width='36px' height='36px'/>
                    <p>Profile</p>
                </li>
            </ul>
        </nav>
    </footer>
    )
}

export default NavBar