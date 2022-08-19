import "./Single.scss";
import Chart from "./../chart/Chart";
import List from "./../table/Table";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

const Singleuser = () => {
  return (
    <div className="singleuser">
      {/* ==============top =================   */}
      <div className="top">
        {/* ---left --- */}
        <div className="left">
          <div className="Edite">Edite</div>
          <h1 className="title">information</h1>
          <div className="items">
            <img
              src="https://mrkzgulfup.com/uploads/165830722270871.jpg"
              alt=""
              className="itemImg"
            />
            <div className="details">
              <div className="itemTitle">
                <h1> Ahmed Darwish</h1>
              <h2>Doctor</h2>
               </div>
              <div className="infodetails">
                <div className="infoleft">
                  <fieldset>
                    <legend>personal</legend>
                    {/* ---------------- */}
                    <div className="detailsItem">

                      <span className="itemKey">Phone Number: </span>
                      
                        <span className="itemvalue">01011773739</span>
                      <input type="number" placeholder="01011773739" />
                      
                      
                      
                        <EditIcon className="editeIcone"/>
                      
                    </div>
                    {/* ---------------- */}
                    <div className="detailsItem">
                      <span className="itemKey">WhatsApp Number: </span>
                      <span className="itemvalue">01011773739</span>
                     
                        <EditIcon className="editeIcone"/>
                      
                    </div>
                    {/* ---------------- */}
                    <div className="detailsItem">
                      <span className="itemKey">Account Status: </span>
                      <span className="itemvalue approved">approved</span>
                    
                        <EditIcon className="editeIcone"/>
                     
                    </div>
              {/* ---------------- */}
              <div className="detailsItem">
                <span className="itemKey">Clinic Name: </span>
                <span className="itemvalue">Macbook clinic</span>
               
                  <EditIcon className="editeIcone"/>
               
              </div>
                  </fieldset>
                </div>
                {/* ------------------------right info---------------------------- */}
                <div className="inforight">
                <fieldset>
                    <legend>place information</legend>

              {/* ---------------- */}
              <div className="detailsItem">
                <span className="itemKey">Governorate: </span>
                <span className="itemvalue">cairo</span>
               
                  <EditIcon className="editeIcone"/>
                
              </div>
              {/* ---------------- */}
              <div className="detailsItem">
                <span className="itemKey">City: </span>
                <span className="itemvalue">jizah</span>
                             
                  <EditIcon className="editeIcone"/>
               
              </div>
              {/* ---------------- */}
              <div className="detailsItem">
                <span className="itemKey">Street: </span>
                <span className="itemvalue">4 ahmed strret</span>
                <EditIcon className="editeIcone"/>
              </div>
              {/* ---------------- */}
              <div className="detailsItem">
                <span className="itemKey">Building: </span>
                <span className="itemvalue">12</span>
                              
                  <EditIcon  className="editeIcone"/>
               
              </div>
              {/* ---------------- */}
              <div className="detailsItem">
                <span className="itemKey">Details: </span>
                <span className="itemvalue">eng.ahmed.darwish6@gmail.com</span>
                               
                  <EditIcon  className="editeIcone"/>
                
              </div>
                    </fieldset>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* ---right --- */}
        <div className="right">
          <Chart spect={4 / 1} title="User spending (last 6 months)" />
        </div>
      </div>
      {/* ==============bottom =================   */}

      <div className="bottom">
        <List />
      </div>
    </div>
  );
};

export default Singleuser;
