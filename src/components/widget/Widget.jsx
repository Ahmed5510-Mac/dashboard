import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { NavLink } from "react-router-dom";

import './widget.scss'

const Widget = ({type}) => {
    let data ={};
    //temporary
    const amount=100;
    const diff=20
    switch (type) {
        case "user":
            data={
                title:"USERS",
                isMony:false,
                link:"See All Users",
                icon:<PersonOutlineOutlinedIcon className='icon' style={{
                    color:"crimson", 
                    backgroundColor:"rgba(255,0,0,0.2)"}} />
                  
            }
            break;
        case "order":
            data={
                title:"ORDERS",
                isMony:false,
                link:"See All Oreders",
                icon:<ShoppingCartOutlinedIcon className='icon' style={{
                    color:"goldenrod", 
                    backgroundColor:"rgba(218,165,32,0.2)"}} />
            }
            break;
        case "earnings":
            data={
                title:" EARNINGS",
                isMony:true,
                link:"See Net earnings",
                icon:<MonetizationOnOutlinedIcon className='icon' style={{
                    color:"green", 
                    backgroundColor:"rgba(0,128,0,0.2)"}} />
            }
            break;
        case "balance":
            data={
                title:" balance",
                isMony:true,
                link:"See Details",
                icon:<AccountBalanceWalletOutlinedIcon className='icon' 
                style={{
                    color:"purple", 
                    backgroundColor:"rgba(128,0,128,0.2)"}}/>
            }
            break;
    
        default:
            break;
    }
  return (

    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMony && "$"} {amount}</span>
            <span className="link">{data.link}</span>

        </div>
        {/* -----------right---------- */}
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon />
                {diff}%
                </div>
                {data.icon}
        </div>
    </div>


  )
}

export default Widget