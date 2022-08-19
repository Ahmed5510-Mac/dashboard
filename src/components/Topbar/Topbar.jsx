// import { React } from 'react';
// import style from './Topbar.module.css'
// import img1 from '../../assets/profile.jpg';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate, NavLink } from 'react-router-dom';
// import {NotificationsNone ,Language, Settings} from '@material-ui/icons';
// import {toggleSidebarfun} from '../../store/userShared/userSharedSlice'
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
// import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
// import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
// import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
// import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
// import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
// // ----------------tiopbar---------------
// const Topbar = () => {
//     const navigate = useNavigate()
//     const dispatch=useDispatch()
//     const{toggleSidebar}=useSelector((state)=>state.userSharedSlice)
//     const newuser = JSON.parse(localStorage.getItem('user'))
//     const onLogout = () => {
//         navigate("/login");
//     };

// // --------------scroll-----------------
//     window.onscroll = function () {
//         let myNav = document.getElementById("navBar");
//         if (window.scrollY === 0) {
//             myNav.classList.remove("nav-color");
//             myNav.style.backgroundColor="transparent"
//             myNav.classList.remove("navbar-shrink");
//             myNav.style.paddingInline="0";
//         } else {
//             myNav.classList.add("nav-color");
//             myNav.style.backgroundColor="#fff"
//           myNav.style.paddingInline="1rem";
//         }
//       };
// // --------------Toggle-----------------
//  const handelToggle=() => {
//     dispatch(toggleSidebar())
//     // console.log(toggleSidebar)
// }
//     return (<>
//         <div className={style.topbar} id="navBar">
//             <div className={style.topbarWrapper}>
//                 {/*icon menue */}
//                 <div className={style.menue} onClick={()=>{handelToggle()}}>
//                     <div className={style.menue} >
//                     <i className="fa-solid fa-bars fa-2x"></i>
//                     </div>
//                 </div>
//                 {/* search */}
//                 <div className={ style.search}>
//                     <input type="text" placeholder='Search...'/>
//                     <i className="fa-solid fa-magnifying-glass"></i>
//                 </div>
//                 {/* user */}
//                 <div className={style.topRight}>
//                 <div className="item">
//             <LanguageOutlinedIcon/>
//               English
//           </div>
//           <div className="item">
//             <DarkModeOutlinedIcon/>
              
//           </div>
//           <div className="item">
//             <FullscreenExitOutlinedIcon/>
              
//           </div>
//           <div className="item">
//             <NotificationsActiveOutlinedIcon/>
//             <div className="counter">1</div>
              
//           </div>
//           <div className="item">
//             <MarkUnreadChatAltOutlinedIcon/>
//             <div className="counter">1</div>
              
//           </div>
//           <div className="item">
//             <ListAltOutlinedIcon/> 
//           </div>
//           <div className="item">
//             <img src={img1} alt=""  className='Avatar'/>
//           </div>
//          </div>
//       </div>
               
//         </div>
           
//     </>);
// }
// export default Topbar