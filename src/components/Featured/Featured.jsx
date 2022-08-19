import './featured.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { NavLink } from "react-router-dom";


const Featured = () => {
  return (
    <div className="featured">
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertOutlinedIcon fontSize='small'/>
        </div>
        <div className="bottom">
              <div className="featuredChart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
              </div>
              <p className="title"> Total sales made today</p>
              <p className="amount"> $420</p>
              <p className="desc"> previous transaction progressing . Last payments may not be inclouded.</p>
               
               <div className="summary">
                <div className="item">
                  <div className="itemTitle">Target</div>
                  <div className="itemResult Negative">
                    <KeyboardArrowDownIcon fontSize='small'/>
                    <div className="resultAmount">$12.4k</div>
                  </div>
                </div>
                <div className="item">
                  <div className="itemTitle">Last week</div>
                  <div className="itemResult positive">
                    <KeyboardArrowDownIcon fontSize='small'/>
                    <div className="resultAmount">$12.4k</div>
                  </div>
                </div>
                <div className="item">
                  <div className="itemTitle">Last month</div>
                  <div className="itemResult positive">
                    <KeyboardArrowDownIcon fontSize='small'/>
                    <div className="resultAmount">$12.4k</div>
                  </div>
                </div>
               </div>
        </div>
    </div>
  )
}

export default Featured