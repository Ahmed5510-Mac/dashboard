import React from 'react'
import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import  imag from '../../assets/img1.jpg'
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
const Navbar = () => {
  const navigate = useNavigate()
      const dispatch=useDispatch()
      const{toggleSidebar}=useSelector((state)=>state.userSharedSlice)
      const newuser = JSON.parse(localStorage.getItem('user'))
      const onLogout = () => {
          navigate("/login");
      };
  // --------------scroll-----------------
      window.onscroll = function () {
          let myNav = document.getElementById("navBar");
          if (window.scrollY === 0) {
              myNav.classList.remove("nav-color");
              myNav.style.backgroundColor="transparent"
              myNav.classList.remove("navbar-shrink");
              myNav.style.paddingInline="0";
          } else {
              myNav.classList.add("nav-color");
              myNav.style.backgroundColor="#fff"
            myNav.style.paddingInline="1rem";
          }
        };
   // --------------Toggle-----------------
    const handelToggle=() => {
     dispatch(toggleSidebar())
     // console.log(toggleSidebar)
   }
  return (
    <div className="navbar">
      <div className="wrapper">
          <MenuIcon className="menue-icon"/>
        <div className="search">
          <input type="text" placeholder='search...'  />
          <SearchOutlinedIcon/>
        </div>
         <div className="items">
          <div className="item">
            <LanguageOutlinedIcon/>
              English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon/>
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon/>
          </div>
          <div className="item">
            <NotificationsActiveOutlinedIcon/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <MarkUnreadChatAltOutlinedIcon/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ListAltOutlinedIcon/> 
          </div>
          <div className="item">
            <img src={imag} alt=""  className='Avatar'/>
          </div>
         </div>
      </div>

    </div>
  )
}

export default Navbar