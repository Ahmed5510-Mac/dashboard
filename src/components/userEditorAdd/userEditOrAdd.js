import React from "react";
import styles from "./useredite.module.css";
import imag1 from "../../assets/profile.jpg";
import { NavLink } from 'react-router-dom';

function UserEditOrAdd() {
  return (
    <div className={styles.user}>
      <div className={styles.userTitleContainer}>
        <h1 className={styles.userTitle}>UserEdit </h1>
        <NavLink to="/newUser">
        <button className={styles.userAddbutton}> creat</button>
        </NavLink>
      </div>
      <div className={styles.userContainer}>
        {/* user Show */}
        <div className={styles.Usershow}>
          {/* show top */}
          <div className={styles.UsershowTop}>
            <img src={imag1} className={styles.userShowImage} alt="" />
            <div className={styles.userShowTopTitle}>
              <span className={styles.userShowUserName}>Ahmed Darwidh</span>
              <span className={styles.userShowUserTitle}>
                softwere Engineer
              </span>
            </div>
          </div>
          {/* showbottom */}
          <div className={styles.UsershowBottom}></div>
          <span className={styles.userShowTitle}> Account Details</span>
          <div className={styles.userShowInfo}>
           <span className={styles.userShowIcon}> <i className="fa-solid fa-user"></i></span>
            <span className={styles.userShowInfoTitle}> Ahmed Darwidh </span>
          </div>
          <div className={styles.userShowInfo}>
          <span className={styles.userShowIcon}> <i className="fa-solid fa-person-circle-question"></i></span>
            <span className={styles.userShowInfoTitle}> Active </span>
          </div>
          <div className={styles.userShowInfo}>
          <span className={styles.userShowIcon}><i className="fa-solid fa-person-half-dress"></i></span>
            <span className={styles.userShowInfoTitle}> Doctor </span>
          </div>

          <span className={styles.userShowTitle}> Contact Details</span>
         
          <div className={styles.userShowInfo}>
          <span className={styles.userShowIcon}> <i className="fa-solid fa-user"></i></span>
            <span className={styles.userShowInfoTitle}> 01011773739 </span>
          </div>
          <div className={styles.userShowInfo}>
          <span className={styles.userShowIcon}> <i className="fa-solid fa-map-location"></i></span>
            <span className={styles.userShowInfoTitle}> kfs ah-street build5 </span>
          </div>
        </div>
        {/* User update */}
        <div className={styles.UserUpdate}>
            <span className={styles.userUpdateTitle}> Edit</span>
            <form className={styles.userUpdateForm}>
                {/* update left */}
                <div className={styles.userUpdateLeft}>
                    <div className={styles.userUpdateItem}>
                        <label htmlFor="ahmed"> User Name</label>
                        <input  type="text" placeholder="Full Name" className={styles.userUpdateInput} />
                    </div>

                    <div className={styles.userUpdateItem}>
                        <label> Type</label>
                        <input type="text" placeholder="Doctor/Merchant" className={styles.userUpdateInput} />
                    </div>

                    <div className={styles.userUpdateItem}>
                        <label> phone Number</label>
                        <input type="tel" placeholder="01011773739" className={styles.userUpdateInput} />
                    </div>

                    <div className={styles.userUpdateItem}>
                        <label> address </label>
                        <input type="text" placeholder="kfs ah-street build5 " className={styles.userUpdateInput} />
                    </div>
                </div>
                {/* update right */}
                <div className={styles.userUpdateRight}>
                    <div className={styles.userUpdateUpload}> 
                    <img className={styles.userUpdateImage} src={imag1} alt="imageProfile"/>
                    <label className={styles.userUploadebtnicon} htmlFor="ahmed"> <i className="fa-solid fa-upload"></i> </label>
                    <input type="file" id="ahmed"  style={{display:"none"}}/>
                    </div>
                    <button className={styles.userUpdateButton}>Update</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}

export default UserEditOrAdd;
